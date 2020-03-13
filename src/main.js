import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入插件
import jquery from "jquery";
import echarts from "echarts";
import VueAwesomeSwiper from "vue-awesome-swiper";
import axios from "./httpConfig/http";
import VueAxios from "vue-axios";
// 引入外部css
import "swiper/dist/css/swiper.css";
import "./assets/css/base.css";
// 引入组件
import BorderLeft from "./components/BorderLeft.vue";
import BorderRight from "./components/BorderRight.vue";
import BorderMain from "./components/BorderMain.vue";
import BorderBg from "./components/BorderBg.vue";
import Semicircle from "./components/Semicircle.vue";
import Nav from "./components/Nav.vue";
import NavBorder from "./components/NavBorder.vue";

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);
Vue.use(VueAxios, axios);
Vue.prototype.$ = jquery;
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

Vue.component("BorderLeft", BorderLeft);
Vue.component("BorderRight", BorderRight);
Vue.component("BorderMain", BorderMain);
Vue.component("BorderBg", BorderBg);
Vue.component("Semicircle", Semicircle);
Vue.component("Nav", Nav);
Vue.component("NavBorder", NavBorder);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
