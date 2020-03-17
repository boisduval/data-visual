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
import BorderRightLonger from "./components/BorderRightLonger.vue";
import BorderRightLongest from "./components/BorderRightLongest.vue";
import BorderMain from "./components/BorderMain.vue";
import BorderBg from "./components/BorderBg.vue";
import BorderBgLonger from "./components/BorderBgLonger.vue";
import BorderBgLongest from "./components/BorderBgLongest.vue";
import BorderBgHigher from "./components/BorderBgHigher.vue";
import Semicircle from "./components/Semicircle.vue";
import Nav from "./components/Nav.vue";
import NavBorder from "./components/NavBorder.vue";
import BorderCenter from "./components/BorderCenter.vue";
import Usp from "./components/Usp.vue";
import Thermometer from "./components/Thermometer.vue";
import IndicatingInstrument from "./components/IndicatingInstrument.vue";
import Battery from "./components/Battery.vue";
Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);
Vue.use(VueAxios, axios);
Vue.prototype.$ = jquery;
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

Vue.component("BorderLeft", BorderLeft);
Vue.component("BorderRight", BorderRight);
Vue.component("BorderRightLonger", BorderRightLonger);
Vue.component("BorderRightLongest", BorderRightLongest);
Vue.component("BorderMain", BorderMain);
Vue.component("BorderBg", BorderBg);
Vue.component("BorderBgLonger", BorderBgLonger);
Vue.component("BorderBgLongest", BorderBgLongest);
Vue.component("BorderBgHigher", BorderBgHigher);
Vue.component("Semicircle", Semicircle);
Vue.component("Nav", Nav);
Vue.component("NavBorder", NavBorder);
Vue.component("BorderCenter", BorderCenter);
Vue.component("Usp", Usp);
Vue.component("Thermometer", Thermometer);
Vue.component("IndicatingInstrument", IndicatingInstrument);
Vue.component("Battery", Battery);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
