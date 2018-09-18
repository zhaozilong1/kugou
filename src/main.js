import Vue from 'vue'
import App from './App.vue'
require("./assets/style.scss")
import router from "./routes/routes.js";
import axios from "axios";
import Loading from "./loading/loading.js";
import store from "./store/store.js";
require("./assets/icon/iconfont.css")
Vue.prototype.$http = axios
Vue.use(Loading)
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
