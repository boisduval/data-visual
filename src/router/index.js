import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { Loading } from "element-ui";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "index",
        component: () =>
          import(/* webpackChunkName: "Index" */ "../views/Index.vue")
      },
      {
        path: "/framework",
        name: "framework",
        component: () =>
          import(/* webpackChunkName: "Framework" */ "../views/Framework.vue")
      },
      {
        path: "/realtime",
        name: "realtime",
        component: () =>
          import(/* webpackChunkName: "Realtime" */ "../views/Realtime.vue")
      },
      {
        path: "/energy",
        name: "energy",
        component: () =>
          import(/* webpackChunkName: "Energy" */ "../views/Energy.vue")
      },
      {
        path: "/extreme",
        name: "extreme",
        component: () =>
          import(/* webpackChunkName: "Extreme" */ "../views/Extreme.vue")
      },
      {
        path: "/security",
        name: "security",
        component: () =>
          import(/* webpackChunkName: "Security" */ "../views/Security.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "Security" */ "../views/Login.vue")
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 前置拦截
router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    next();
  } else {
    var token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      let loadingInstance = Loading.service({
        fullscreen: true,
        text: "正在跳转...",
        background: "rgba(0, 0, 0, 0)",
        customClass: "my-loading"
      });
      setTimeout(() => {
        loadingInstance.close();
        next("/login");
      }, 1000);
    }
  }
});

export default router;
