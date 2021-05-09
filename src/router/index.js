import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { controlWebsiteTitle } from "@/utils";

Vue.use(VueRouter);

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
