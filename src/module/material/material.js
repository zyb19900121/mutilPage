import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Header from '../../components/main/Header.vue'
import HeaderNav from '../../components/main/HeaderNav.vue'
import Content from '../../components/material/Content.vue'
import Footer from '../../components/main/Footer.vue'
import '../../assets/css/main.css'
import animate from 'animate.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.component('Header', Header);
Vue.component('HeaderNav', HeaderNav);
Vue.component('Content', Content);
Vue.component('Footer', Footer);
const routes = [];
const router = new VueRouter({
  mode: 'history',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {App}
})
