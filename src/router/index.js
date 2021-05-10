import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { controlWebsiteTitle } from "@/utils";

if (!window.VueRouter) {
  // 通过 CDN 引入的时候会污染一个全局变量 VueRouter
  // 通过 CDN 引入不能书写下面的代码
  Vue.use(VueRouter);
}

const router = new VueRouter({
  routes,
  mode: "history",
  // linkActiveClass: "active",
  // linkExactActiveClass: "",
});

router.afterEach((to) => {
  if (to.meta?.title) {
    controlWebsiteTitle.setRouteTitle(to.meta.title);
  }
});

export default router;
