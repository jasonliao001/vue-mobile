<template>
  <div class="about">
    <div class="warning">
      <Cell :title="title" :has-arrow="false">
        <i class="icon icon-warning" slot="leftIcon"></i>
      </Cell>
    </div>
    <bcCollapse v-model="collapseVal">
      <collapse v-for="(item, index) in list" :data="item" :key="index">
        <div class="gray"></div>
        <time-line v-for="(line, j) in lines" :data="line" :key="j"></time-line>
      </collapse>
    </bcCollapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapseVal: ['0', '1', '2'],
      title: '时间轴数字代表当年宫格所在位置',
      list: [
        {
          cellTitle: '宫格6/8/9',
          cellValue: '12人'
        },
        {
          cellTitle: '宫格6/8/9',
          cellValue: '12人'
        },
        {
          cellTitle: '宫格6/8/9',
          cellValue: '12人'
        }
      ],
      lines: [
        {
          username: 'v_bxo(xxxx)',
          level: 'L3-2',
          timeline: [
            {
              year: 2013,
              num: 6
            },
            {
              year: 2013,
              num: 6
            },
            {
              year: 2014,
              num: 9
            },
            {
              year: 2015,
              num: 8
            },
            {
              year: 2016,
              num: 6
            },
            {
              year: 2017,
              num: 9
            },
            {
              year: 2018,
              num: 8
            }
          ]
        },
        {
          username: 'v_bxo(xxxx)',
          level: 'L3-2',
          timeline: [
            {
              year: 2013,
              num: 6
            },
            {
              year: 2013,
              num: 6
            },
            {
              year: 2014,
              num: 9
            },
            {
              year: 2015,
              num: 8
            },
            {
              year: 2016,
              num: 6
            },
            {
              year: 2017,
              num: 9
            },
            {
              year: 2018,
              num: 8
            },
            {
              year: 2019,
              num: 4
            },
            {
              year: 2018,
              num: 8
            },
            {
              year: 2019,
              num: 4
            }
          ]
        },
        {
          username: 'v_bao(xxxx)',
          level: 'L3-2',
          timeline: [
            {
              year: 2013,
              num: 6
            },
            {
              year: 2014,
              num: 9
            }
          ]
        },
        {
          username: 'v_bao(xxxx)',
          level: 'L3-2',
          timeline: [
            {
              year: 2013,
              num: 6
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less">
.about {
  background-color: #f4f4f4;
}
.warning {
  /deep/ .cell {
    background-color: #f4f4f4;
    color: #007aff;
    font-size: 12px;
    height: 70px;
  }
  .icon-warning {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url(../assets/images/warning.png) no-repeat;
    background-size: 100% 100%;
    margin-right: 6px;
  }
}
.collapse {
  .gray {
    width: 100%;
    height: 4px;
    background-color: #f4f4f4;
  }
  .collapse-item {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    .cell {
      height: 90px;
      .cell-title {
        font-size: 0.4rem;
        color: #333;
        font-weight: 700;
      }
      .cell-value {
        color: #7c7c7c;
        font-size: 0.34667rem;
      }
    }
    .timeline {
      padding: 20px 30px 0 30px;
    }
  }
}
</style>
