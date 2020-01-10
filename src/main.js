import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/normalize.less';
import Collapse from '@/components/Collapse.vue';
import Head from '@/components/Head.vue';
import Tab from '@/components/Tab.vue';
import Cell from '@/components/Cell.vue';
import Tag from '@/components/Tag.vue';
import TimeLine from '@/components/TimeLine.vue';
import bcCollapse from '@/components/bcCollapse.vue';
import Scroll from '@/components/Scroll.vue';
const components = [Collapse, Head, Tab, Cell, Tag, TimeLine, bcCollapse, Scroll];
components.forEach(component => {
  Vue.component(component.name, component);
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');