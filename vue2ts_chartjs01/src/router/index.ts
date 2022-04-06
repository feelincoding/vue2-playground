import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/chartjs",
    name: "chartJs",
    component: () => import("../views/ChartJs.vue"),
  },
  {
    path: "/vueChartJs",
    name: "vueChartJs",
    component: () => import("../views/VueChartJs.vue"),
  },
  {
    path: "/vueChartJs3",
    name: "vueChartJs3",
    component: () => import("../views/VueChartJs3.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
