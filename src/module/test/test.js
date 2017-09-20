import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Header from '../../components/main/Header.vue'
import Footer from '../../components/main/Footer.vue'

import '../../assets/css/main.css'

Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [];
const router = new VueRouter({
  routes
});

Vue.component('Header', Header);
Vue.component('Footer', Footer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {App}
});


