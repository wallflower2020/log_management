import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

import index from "@/views/index";
import login from "@/views/login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: index
    },
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      component: HelloWorld
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
    }
    {
      path: "/workplace",
      name: "workplace",
      component: workplace
      children: [
        {
          path: 'commission',
          name: 'commission',
          component: commission
        },
        {
          path: 'everyday',
          name: 'everyday',
          component: everyday
        },
        {
          path: 'special',
          name: 'special',
          component: special
        }
      ]
    }
  ]
});
