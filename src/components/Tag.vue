<template>
  <div class="tag">
    <span class="tag-title">{{ data.title }}</span>
    <div class="tag-wrap" v-for="(item, index) in data.list">
      <div class="tag-header">
        <span class="icon-box" @click="toggle(item)">
          <i :class="[item.isActive ? 'icon-fold' : 'icon-unfold']"></i>
        </span>
        <span class="tag-box">{{ item.label }}</span>
      </div>
      <collapse-transition>
        <div class="tag-content" v-show="item.isActive">
          <ul class="tag-content-ul">
            <li v-for="tag in item.children" class="tag-content-li tag-box">{{ tag }}</li>
          </ul>
        </div>
      </collapse-transition>
    </div>
  </div>
</template>
<script>
import CollapseTransition from './collapse-transition';
export default {
  name: 'Tag',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  components: { CollapseTransition },
  data() {
    return {
      expand: true,
      mounted: false,
      isActive: true,
      activeId: -1
    };
  },
  methods: {
    toggle(item) {
      item.isActive = !item.isActive;

      // this.expand = !this.expand;
    }
  },
  mounted() {
    this.mounted = true;
  }
};
</script>
<style lang="less" scoped>
.tag-box {
  display: inline-block;
  padding: 0px 26px;
  box-sizing: border-box;
  height: 54px;
  line-height: 54px;
  font-size: 0.32rem;
  color: #007aff;
  font-weight: 700;
  border: 1px solid #007aff;
  border-radius: 54px;
}
.tag {
  padding: 20px 30px 30px;
  .tag-title {
    font-size: 0.34667rem;
    font-weight: 700;
    color: #333;
    position: relative;
    margin-left: 20px;
    &:before {
      content: '';
      position: absolute;
      width: 0.3em;
      height: 0.95em;
      background: #007aff;
      left: -20px;
      top: 0;
      margin-top: 2px;
    }
  }
  .tag-wrap {
    padding-top: 20px;
    .tag-header {
      .tag-box {
        margin-left: 15px;
      }
      .icon-box {
        position: relative;
        display: inline-block;
        height: 100%;
        margin-left: -0.24rem;
        vertical-align: middle;
        .icon-unfold {
          display: inline-block;
          width: 36px;
          height: 36px;
          background: url(../assets/images/unfold.png) no-repeat;
          background-size: 100% 100%;
        }
        .icon-fold {
          display: inline-block;
          width: 36px;
          height: 36px;
          background: url(../assets/images/fold.png) no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .tag-content {
      padding: 0 33px 0 33px;
      .tag-content-li {
        margin-right: 12px;
        color: #79aafc;
        border-color: #79aafc;
        margin-top: 10px;
      }
    }
  }
}
</style>
