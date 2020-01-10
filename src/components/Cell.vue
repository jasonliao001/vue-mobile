<template>
  <div class="cell cell-clickable collapse-item-title" @click.stop="handleClickArrow">
    <slot name="leftIcon"></slot>
    <slot name="title" v-if="Boolean(title)">
      <div class="cell-title" :class="titleClass">
        <span>{{ title }}</span>
      </div>
    </slot>
    <slot name="value" v-if="Boolean(value)">
      <div class="cell-value" :class="valueClass">
        <span>{{ value }}</span>
      </div>
    </slot>
    <template v-if="hasArrow">
      <span :class="['icon-box', { ['expand']: expand }]" @click.stop="handleClickArrow">
        <i class="icon cell-right-icon"></i>
      </span>
    </template>
    <template v-else>
      <slot name="rightIcon"> </slot>
    </template>
    <slot name="extra"></slot>
  </div>
</template>
<script>
export default {
  name: 'Cell',
  data() {
    return {
      expand: false
    };
  },
  props: {
    hasArrow: {
      type: Boolean,
      default: true
    },
    title: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    titleClass: {
      type: String
    },
    valueClass: {
      type: String
    }
  },
  methods: {
    handleClickArrow() {
      this.expand = !this.expand;
      this.$emit('clickArrow', this.expand);
      this.$parent.toggle && this.$parent.toggle();
    }
  }
};
</script>
<style lang="less" scoped>
.cell {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 30px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  background-color: #fff;
  align-items: center;
  &::after {
    .hairline-bottom(#ddd, 0);
  }
  .cell-title,
  .cell-value {
    flex: 1;
  }
  .cell-title {
    text-align: left;
  }
  .cell-value {
    text-align: right;
  }
  .icon-box {
    position: relative;
    display: inline-block;
    width: 22px;
    height: 22px;
    border: 18px solid transparent;
    vertical-align: middle;
    margin-left: 10px;
    &.expand {
      .cell-right-icon {
        transform: rotate(225deg);
        left: 70%;
        top: 20%;
        transition: all 0.1s ease;
      }
    }
    .cell-right-icon {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 16px;
      height: 16px;
      border-left: 2px solid currentColor;
      border-top: 2px solid currentColor;
      position: absolute;
      left: 50%;
      top: 50%;
      right: 0;
      transition: all 0.1s ease;
      transform-origin: left center;
      transform: translate(-50%, -50%) rotate(45deg);
      box-sizing: border-box;
    }
  }
}
</style>
