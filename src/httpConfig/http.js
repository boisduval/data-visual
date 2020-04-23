/**
 * ajax请求配置
 */
import axios from "axios";
import { Loading } from "element-ui";

// axios默认配置
axios.defaults.timeout = 10000; // 超时时间
axios.defaults.baseURL = "http://sf28090049.wicp.vip:8082/conn"; // 默认地址
// axios.defaults.baseURL = 'http://192.168.0.100:8082/conn'
// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 1001) {
      let loadingInstance = Loading.service({
        fullscreen: true,
        text: "正在跳转...",
        background: "rgba(0, 0, 0, 0)",
        customClass: "my-loading"
      });
      setTimeout(() => {
        loadingInstance.close();
        window.location.href = "/statement/login";
      }, 1000);
    } else {
      return response;
    }
  },
  error => {
    window.alert(error.response.status);
    return Promise.reject(error.response); // 返回接口返回的错误信息
  }
);

export default axios;
