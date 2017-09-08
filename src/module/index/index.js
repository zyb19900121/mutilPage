import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Demo1 from '../../components/Demo1.vue'
import Demo2 from '../../components/Demo2.vue'
import Demo3 from '../../components/Demo3.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [{
  path: '/',
  component: Demo1
}, {
  path: '/Demo2',
  component: Demo2
}, {
  path: '/Demo3',
  component: Demo3
}]
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {App}
})
