import Vue from "vue";
import { Store, install } from "vuex";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";

if (!window.Vuex) {
  // 通过 CDN 引入的时候会污染一个全局变量 Vuex
  // 通过 CDN 引入不能书写下面的代码
  install(Vue);
}

export default new Store({
  strict: true, // 严格模式
  modules: {
    banner,
    setting,
    about,
    project,
  },
});
