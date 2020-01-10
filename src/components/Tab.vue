<template>
  <div class="tabs tabs-line">
    <div class="tabs-wrap hairline-top-bottom">
      <div class="tabs-nav tabs-nav-line">
        <div class="tab"><span class="ellipsis"> 个人总览</span></div>
        <div class="tab tab-active"><span class="ellipsis">所带团队</span></div>
        <div class="tab "><span class="ellipsis">干部档案</span></div>
        <!-- <div class="tabs-line" style="width: 17%; transform: translateX(187px) translateX(-50%);"></div> -->
      </div>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tab'
};
</script>
<style lang="less" scoped>
.tabs {
  position: relative;
  .tabs-wrap {
    height: 100px;
    overflow: hidden;
    &.hairline-top-bottom::after {
      .hairline-bottom(#ddd, 0);
    }
    box-shadow: 0 4px 12px #ebedf0;
    .tabs-nav {
      position: relative;
      display: flex;
      background-color: #fff;
      user-select: none;
      .tab {
        position: relative;
        flex: 1;
        box-sizing: border-box;
        min-width: 0;
        padding: 0 5px;
        color: #7d7e80;
        font-size: 14px;
        line-height: 100px;
        text-align: center;
        cursor: pointer;
        &-active {
          color: #007aff;
          font-weight: 700;
        }
        .ellipsis {
          display: block;
          font-size: 16px;
          .ellipsis();
        }
      }
      .tabs-line {
        position: absolute;
        bottom: 1px;
        left: 0;
        z-index: 1;
        height: 6px;
        background-color: #007aff;
        border-radius: 6px;
      }
    }
  }
}
</style>
