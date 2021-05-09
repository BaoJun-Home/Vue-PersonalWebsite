import { fetchSetting } from "@/api/setting";
import { controlWebsiteTitle } from "@/utils";

export default {
  namespaced: true,
  state: {
    loading: false,
    datas: null,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setDatas(state, payload) {
      state.datas = payload;
    },
  },
  actions: {
    async getSetting({ commit }) {
      commit("setLoading", true);
      const result = await fetchSetting();
      commit("setDatas", result);
      commit("setLoading", false);
      // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
      if (result.favicon) {
        const link = document.querySelector("link[rel='shortcut icon']");
        if (!link) {
          const link = document.createElement("link");
          link.rel = "shortcut icon";
          link.type = "images/x-icon";
          link.href = result.favicon;
          document.head.appendChild(link);
        }
      }
      if (result?.siteTitle) {
        controlWebsiteTitle.setWebsiteTitle(result.siteTitle);
      }
    },
  },
};
