import Vue from "vue";
import Router from "vue-router";

import index from "@/views/index";
import login from "@/views/login";

// const Workplace = resolve => require(["@/views/Workplace"], resolve);
const commission = resolve =>
  require(["@/views/workplace/commission"], resolve);
const everyday = resolve => require(["@/views/workplace/everyday"], resolve);
const special = resolve => require(["@/views/workplace/special"], resolve);
// import commission from "@/views/workplace/commission";
// import everyday from "@/views/workplace/everyday";
// import special from "@/views/workplace/special";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: index //首页
    },
    {
      path: "/index",
      name: "index",
      component: index //首页
    },
    {
      path: "/login",
      name: "login",
      component: login //登录
    },
    {
      path: "/commission",
      name: "commission",
      component: commission  //代办
    },
    {
      path: "/everyday",
      name: "everyday",
      component: everyday //日常
    },
    {
      path: "/special",
      name: "special",
      component: special //特殊
    },
    // {
    //   path: "/special",
    //   name: "special",
    //   component: special //特殊
    // },
    // {
    //   path: "/special",
    //   name: "special",
    //   component: special //特殊
    // },
    // {
    //   path: "/special",
    //   name: "special",
    //   component: special //特殊
    // },
  ]
});
