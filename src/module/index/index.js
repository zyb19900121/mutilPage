import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Header from '../../components/main/Header.vue'
import HeaderNav from '../../components/main/HeaderNav.vue'
import Sign from '../../components/index/Sign.vue'
import Journal from '../../components/index/Journal.vue'
import Material from '../../components/index/Material.vue'
import Style from '../../components/index/Style.vue'
import Designer from '../../components/index/Designer.vue'
import Information from '../../components/index/Information.vue'
import News from '../../components/index/News.vue'
import FriendLink from '../../components/index/FriendLink.vue'
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
Vue.component('Sign', Sign);
Vue.component('Journal', Journal);
Vue.component('Material', Material);
Vue.component('Style', Style);
Vue.component('Designer', Designer);
Vue.component('Information', Information);
Vue.component('News', News);
Vue.component('FriendLink', FriendLink);
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
