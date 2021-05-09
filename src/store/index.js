import Vue from "vue";
import Vuex from "vuex";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, // 严格模式
  modules: {
    banner,
    setting,
    about,
    project,
  },
});
