// https://juejin.im/post/5ba48923e51d450ea52fb532 vue cli 3 自动化导入less配置
const path = require('path');

module.exports = {
  // publicPath: '/mia/',
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
};

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/index.less') // 需要全局导入的less
      ]
    });
}
