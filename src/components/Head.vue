<template>
  <div class="header">
    <div class="username">
      {{ userName }}
    </div>
    <div class="link">
      <router-link :to="item.to" v-for="(item, index) in link">
        <i :class="['icon', `icon-${item.icon}`]"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Head',
  data() {
    return {
      userName: 'zhangshanshan（张闪闪)',
      link: [
        {
          icon: 'km',
          to: '/'
        },
        {
          icon: 'start',
          to: '/'
        },
        {
          icon: 'edit',
          to: '/'
        },
        {
          icon: 'set',
          to: '/'
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.icon {
  display: inline-block;
  width: 44px;
  height: 44px;
  background-color: #fff;
}
.header {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  align-items: center;
  overflow: hidden;
  color: #ffffff;
  background: linear-gradient(to right, #030ecc 25%, #3f83f6 60%);
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
  padding: 0 40px 0 30px;
  .username {
    flex: 1;
    width: 40%;
    text-align: left;
    color: #fff;
    .ellipsis();
  }
  .link {
    position: relative;
    width: 60%;
    text-align: right;
    a {
      margin-left: 10px;
    }
  }
}
</style>
