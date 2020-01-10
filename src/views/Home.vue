<template>
  <div class="home">
    <Head></Head>
    <Tab></Tab>
    <bcCollapse v-model="collapseVal">
      <collapse :data="list">
        <Tag v-for="(tag, index) in tags" :data="tag"></Tag>
      </collapse>
    </bcCollapse>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data() {
    return {
      collapseVal: ['0'],
      list: {
        cellTitle: '经验与能力'
      },
      tags: [
        {
          title: '能力标签',

          list: [
            {
              label: '使命召唤',
              isActive: true,
              children: ['使命标签', '使命标签', '使命标签', '使命标签']
            },
            { label: '使命召唤', isActive: true, children: ['使命标签', '使命标签', '使命标签', '使命标签'] },
            { label: '使命召唤', isActive: true, children: ['使命标签', '使命标签', '使命标签', '使命标签'] }
          ]
        },
        {
          title: '擅长领域',
          isActive: true,
          list: [
            {
              label: '使命召唤',
              isActive: true,
              children: ['使命标签', '使命标签', '使命标签', '使命标签']
            },
            { label: '使命召唤', isActive: true, children: ['使命标签', '使命标签', '使命标签', '使命标签'] },
            { label: '使命召唤', isActive: true, children: ['使命标签', '使命标签', '使命标签', '使命标签'] }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.collapse {
  /deep/ .cell {
    height: 110px;
    .cell-title {
      font-size: 0.42667rem;
      font-weight: 900;
    }
  }
}
</style>
