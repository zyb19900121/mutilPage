import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Demo4 from '../../components/Demo4.vue'
import Demo5 from '../../components/Demo5.vue'
import Demo6 from '../../components/Demo6.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: Demo4
  },
  {
    path: '/Demo5',
    component: Demo5
  },
  {
    path: '/Demo6',
    component: Demo6
  }
];
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {App}
});
