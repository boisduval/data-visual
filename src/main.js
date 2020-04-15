import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入插件
import jquery from "jquery";
import "jquery.nicescroll";
import echarts from "echarts";
import VueAwesomeSwiper from "vue-awesome-swiper";
import axios from "./httpConfig/http";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
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
import BorderCenterLonger from "./components/BorderCenterLonger.vue";
import Thermometer from "./components/Thermometer.vue";
import IndicatingInstrument from "./components/IndicatingInstrument.vue";
import Battery from "./components/Battery.vue";
import BorderCenterLongest from "./components/BorderCenterLongest";
import IndicatingInstrumentKw from "./components/IndicatingInstrumentKw";
import EnergyEarnings from "./components/EnergyEarnings";
import FrameworkBorder from "./components/FrameworkBorder";
import FrameworkBattery from "./components/FrameworkBattery";
import ExtremeBorderMain from "./components/ExtremeBorderMain";
import ExtremeBorderMainLonger from "./components/ExtremeBorderMainLonger";
import ExtremeBorderRight from "./components/ExtremeBorderRight";
import ExtremeBorderRightLonger from "./components/ExtremeBorderRightLonger";
import ExtremeBg from "./components/ExtremeBg";
import ExtremeBgSquare from "./components/ExtremeBgSquare";
import ExtremeBgBigger from "./components/ExtremeBgBigger";
import ExtremeInfo from "./components/ExtremeInfo";
import SecurityBorderTop from "./components/SecurityBorderTop";
import SecurityBorderMain from "./components/SecurityBorderMain";
import SecurityBg from "./components/SecurityBg";
import SecurityInfo from "./components/SecurityInfo";

Vue.config.productionTip = false;
Vue.config.productionGzip = true;
Vue.config.productionGzipExtensions = ["js", "css"];
Vue.use(VueAwesomeSwiper);
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
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
Vue.component("BorderCenterLonger", BorderCenterLonger);
Vue.component("BorderCenterLonger", BorderCenterLonger);
Vue.component("BorderCenterLongest", BorderCenterLongest);
Vue.component("Thermometer", Thermometer);
Vue.component("IndicatingInstrument", IndicatingInstrument);
Vue.component("IndicatingInstrumentKw", IndicatingInstrumentKw);
Vue.component("Battery", Battery);
Vue.component("EnergyEarnings", EnergyEarnings);
Vue.component("FrameworkBorder", FrameworkBorder);
Vue.component("FrameworkBattery", FrameworkBattery);
Vue.component("ExtremeBorderMain", ExtremeBorderMain);
Vue.component("ExtremeBorderMainLonger", ExtremeBorderMainLonger);
Vue.component("ExtremeBorderRight", ExtremeBorderRight);
Vue.component("ExtremeBorderRightLonger", ExtremeBorderRightLonger);
Vue.component("ExtremeBg", ExtremeBg);
Vue.component("ExtremeBgSquare", ExtremeBgSquare);
Vue.component("ExtremeBgBigger", ExtremeBgBigger);
Vue.component("ExtremeInfo", ExtremeInfo);
Vue.component("SecurityBorderTop", SecurityBorderTop);
Vue.component("SecurityBorderMain", SecurityBorderMain);
Vue.component("SecurityBg", SecurityBg);
Vue.component("SecurityInfo", SecurityInfo);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
