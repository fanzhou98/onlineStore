import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store";

Vue.config.productionTip = false

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//import font-awesome
import 'font-awesome/css/font-awesome.min.css'

//import vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'
//在开发时需要
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
  Vue.use(VueAwesomeSwiper)
}

// toast
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
  position:'top-center',
  timeout: 2000
};
Vue.use(Toast, options);

import global_const from 'common/const'
Vue.prototype.global_const = global_const

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
