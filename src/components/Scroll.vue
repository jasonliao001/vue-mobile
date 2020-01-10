<template>
  <div class="scroll-wrapper" ref="scoll">
    <div class="scroll-content">
      <slot> </slot>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core';
export default {
  name: 'Scroll',
  data() {
    return {
      bs: null,
      isScroll: false
    };
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$el, {
        scrollX: true,
        probeType: 3,
        bounce: {
          left: false,
          right: false
        }
      });
      this.$nextTick(() => {
        this.bs.refresh();
        this.bs.scrollBy(this.bs.maxScrollX, 0, 'ease'); // 设置初始化位置
      });
      this.registerHooks(['scroll']);
    },
    scroll(pos) {
      if (pos.x === this.bs.maxScrollX) {
        this.$parent.showRightMask = false;
        this.$parent.showleftMask = true;
      } else if (pos.x === 0) {
        this.$parent.showleftMask = false;
        this.$parent.showRightMask = true;
      } else {
        this.$parent.showleftMask = true;
        this.$parent.showRightMask = true;
      }
    },
    registerHooks(hookNames) {
      hookNames.forEach(name => {
        this.bs.on(name, this[name]);
      });
    }
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  mounted() {
    this.$nextTick(() => this.init());
  }
};
</script>
<style lang="less" scoped>
.scroll-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .scroll-content {
    display: inline-block;
  }
}
</style>
