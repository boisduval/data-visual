import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
        path: "/abnormal",
        name: "abnormal",
        component: () =>
          import(/* webpackChunkName: "Abnormal" */ "../views/Abnormal.vue")
      }
    ]
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

export default router;
