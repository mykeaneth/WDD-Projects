import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
      meta: {
        noAuth: true
      }
    }
  ]
});

import store from "@/store";
const loggedIn = store.getters["user/loggedIn"];

router.beforeEach((to, from, next) => {
  console.log(to);

  if (to.name === "login" && loggedIn) {
    next({ name: "home" });
  } else if (!loggedIn && !to.matched.some(record => record.meta.noAuth)) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
