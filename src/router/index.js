import Vue from "vue";
import VueRouter from "vue-router";
import publicRoutes from "../views/public/router";
import protectedRoutes from "../views/protected/router";

Vue.use(VueRouter);

const routes = [...publicRoutes, ...protectedRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
