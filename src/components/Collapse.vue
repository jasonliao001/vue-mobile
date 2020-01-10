<template>
  <div class="collapse-item">
    <Cell :title="data.cellTitle" :value="data.cellValue"></Cell>
    <collapse-transition v-if="mounted">
      <div class="collapse-item-wrapper" v-show="isActive">
        <div class="collapse-item-content">
          <slot :row="data"></slot>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>
<script>
import CollapseTransition from './collapse-transition';
export default {
  name: 'Collapse',
  props: ['data', 'name'],
  components: { CollapseTransition },
  data() {
    return {
      index: 0,
      isActive: false,
      mounted: false
    };
  },
  methods: {
    toggle() {
      this.$parent &&
        this.$parent.toggle({
          name: this.name || this.index,
          isActive: this.isActive
        });
    }
  },
  mounted() {
    this.mounted = true;
  }
};
</script>
<style lang="less" scoped>
.collapse-item-wrapper {
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  will-change: height;
  .collapse-item-content {
    color: #969799;
    font-size: 13px;
    line-height: 1.5;
    background-color: #fff;
  }
}
</style>
