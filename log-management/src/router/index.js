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
      component: index
    },
    {
      path: "/index",
      name: "index",
      component: index
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/commission",
      name: "commission",
      component: commission
    },
    {
      path: "/everyday",
      name: "everyday",
      component: everyday
    },
    {
      path: "/special",
      name: "special",
      component: special
    }
  ]
});
