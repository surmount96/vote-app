import Vue from "vue";
import VueRouter from "vue-router";
import publicRoutes from "../views/public/router";
import protectedRoutes from "../views/protected/router";
import middlewarePipeline from './kernel/middlewarePipeline'
import store from "@/store/index"

Vue.use(VueRouter);

const routes = [...publicRoutes, ...protectedRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
    store
  }
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  })
});

export default router;
