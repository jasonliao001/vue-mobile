<template>
    <div class="timeline">
        <div class="timeline-header">
            <span class="img-box">
                <img src="v_bxliao" @error="imgError" alt />
            </span>
            <span class="username">{{ data.username }}</span>
            <span class="level">{{ data.level }}</span>
        </div>
        <div class="timeline-content">
            <ul class="timeline-content-ul" ref="timeline-wrap">
                <template v-if="data.timeline.length < columnLimit + 1">
                    <li
                        class="timeline-li"
                        v-for="(item, index) in data.timeline"
                        :style="lessColumnLimitStyles"
                    >
                        <div class="li-box" :style="lessColumnLimitStyles">
                            <span class="dot" ref="dot"></span>
                            <span class="num">{{ item.num }}</span>
                            <span class="year">{{ item.year }}</span>
                        </div>
                        <div
                            class="timeline-line"
                            v-if="index != data.timeline.length - 1"
                            :style="lineStyles"
                        ></div>
                    </li>
                </template>
                <template v-else>
                    <li class="timeline-li" v-for="(item, index) in convertList">
                        <div class="li-box" v-if="item.lock">
                            <span class="dot" ref="dot"></span>
                            <span class="num">{{ item.num }}</span>
                            <span class="year">{{ item.year }}</span>
                        </div>
                        <Scroll :style="scrollWrapStyles" v-else>
                            <div class="scroll-item">
                                <div
                                    class="li-box"
                                    ref="scrollItem"
                                    :style="scrollItemStyles"
                                    v-for="(scrollItem, j) in item.scrollList"
                                    :key="j"
                                >
                                    <div class="timeline-line" v-show="!j" :style="lineLeftStyles"></div>
                                    <span class="dot"></span>
                                    <span class="num">{{ scrollItem.num }}</span>
                                    <span class="year">{{ scrollItem.year }}</span>
                                    <div class="timeline-line" :style="lineStyles"></div>
                                </div>
                            </div>
                        </Scroll>
                    </li>
                    <div class="left-line mask-line" v-if="!showleftMask" :style="leftlineStyles"></div>
                    <div
                        class="right-line mask-line"
                        v-if="!showRightMask"
                        :style="rightlineStyles"
                    ></div>
                    <div
                        class="left-mask mask-box"
                        ref="leftMask"
                        v-if="showleftMask"
                        :style="leftMaskStyles"
                    ></div>
                    <div
                        class="right-mask mask-box"
                        ref="rightMask"
                        v-if="showRightMask"
                        :style="rightMaskStyles"
                    ></div>
                </template>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "TimeLine",
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },

    computed: {
        leftMaskStyles() {
            return {
                width: `${this.columnWidth / 2}px`,
                height: `${this.rowHeight}px`,
                left: `${this.columnWidth - 8 + 2}px`
            };
        },
        rightMaskStyles() {
            return {
                width: `${this.columnWidth / 2}px`,
                height: `${this.rowHeight}px`,
                right: `${this.columnWidth - 8 + 2}px`
            };
        },
        lineStyles() {
            return {
                width: `${this.columnWidth - 12}px`,
                left: `${this.columnWidth / 2 + 6}px`
            };
        },
        leftlineStyles() {
            return {
                width: `${this.columnWidth / 2 - 6}px`,
                left: `${this.columnWidth / 2 + 6}px`
            };
        },
        lineLeftStyles() {
            return {
                width: `${this.columnWidth / 2 - 6}px`,
                right: `${this.columnWidth / 2 + 6}px`
            };
        },
        rightlineStyles() {
            return {
                width: `${this.columnWidth / 2 - 6}px`,
                right: `${this.columnWidth / 2 + 6}px`
            };
        },
        scrollWrapStyles() {
            return {
                width: `${this.rowWidth - 2 * this.columnWidth}px`
            };
        },
        scrollItemStyles() {
            return {
                width: `${this.columnWidth}px`
            };
        },
        dotStyles() {
            return {
                width: this.$refs.dot[0].clientWidth
                    ? `${this.$refs.dot[0].clientWidth}px`
                    : "4px"
            };
        },
        lessColumnLimitStyles() {
            return {
                width: `${this.columnWidth}px`,
                flex: "none"
            };
        }
    },
    data() {
        return {
            columnWidth: 0,
            columnLimit: 7,
            rowWidth: 0,
            rowHeight: 0,
            convertList: [],
            showleftMask: true,
            showRightMask: false
        };
    },
    methods: {
        imgError(e) {
            this.$nextTick(() => {
                e.target.src = require("../assets/images/man.png");
            });
        },
        convertData(data) {
            if (data.length < this.columnLimit) return;
            let obj = { scrollList: [] },
                len = data.length;
            return data.reduce((pre, current, index) => {
                if (index === 0 || index === len - 1) {
                    this.$set(current, "lock", true);
                    pre.push(current);
                } else {
                    current.lock = false;
                    obj.scrollList.push(current);
                    if (index === len - 2) {
                        pre.push(obj);
                    }
                }
                return pre;
            }, []);
        }
    },

    mounted() {
        this.convertList = this.convertData(this.data.timeline);
        this.$nextTick(() => {
            this.rowWidth = this.$refs["timeline-wrap"].clientWidth;
            this.rowHeight = this.$refs["timeline-wrap"].clientHeight;
            this.columnWidth = this.rowWidth / this.columnLimit;
        });
    }
};
</script>
<style lang="less">
.img-box {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #ddd;
    vertical-align: middle;
    img {
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
}
.username {
    font-weight: 400;
    color: #333;
    vertical-align: middle;
    margin-left: 15px;
}
.level {
    padding: 0 10px;
    border-radius: 4px;
    font-size: 12px;
    border: 1px solid #007aff;
    vertical-align: middle;
    margin-left: 15px;
}
.timeline-content {
    position: relative;
    padding: 30px 0;
    &::after {
        .hairline-bottom(#ddd, 0);
    }
    .timeline-content-ul {
        display: flex;
        position: relative;
        .timeline-li {
            position: relative;
            flex: 1;
            display: block;
            .scroll-item {
                display: flex;
                position: relative;
            }
            .timeline-line {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                height: 4px;
                background-color: #007aff;
            }
            .li-box {
                display: flex;
                position: relative;
                height: 80px;
                align-items: center;
                justify-content: center;
            }
        }
        .mask-box {
            position: absolute;
            height: 8px;
            top: 50%;
            transform: translateY(-50%);
        }
        .mask-line {
            position: absolute;
            height: 4px;
            top: 50%;
            transform: translateY(-50%);
            background-color: #007aff;
        }
        .left-mask {
            left: 0;
            background: radial-gradient(
                ellipse 100% 34% at left center,
                rgba(255, 255, 255),
                rgba(255, 255, 255, 0.7)
            );
        }
        .right-mask {
            right: 0;
            background: radial-gradient(
                ellipse 100% 34% at right center,
                rgba(255, 255, 255),
                rgba(255, 255, 255, 0.7)
            );
        }
    }
    .dot {
        display: inline-block;
        width: 4px;
        height: 4px;
        background-color: #007aff;
        border-radius: 4px 4px;
    }
    .num {
        position: absolute;
        top: 0;
        font-size: 0.34667rem;
        font-weight: 700;
        color: #007aff;
    }
    .year {
        position: absolute;
        bottom: 0;
        font-size: 0.29333rem;
        font-weight: 700;
        color: #7c7c7d;
    }
}
</style>
