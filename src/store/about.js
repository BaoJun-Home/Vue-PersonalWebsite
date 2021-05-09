import { fetchAbout } from "@/api/about";

export default {
  namespaced: true,
  state: {
    loading: false,
    datas: "",
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
    async getAbout({ commit, state }) {
      if (state.datas) return;
      commit("setLoading", true);
      const result = await fetchAbout();
      commit("setDatas", result);
      commit("setLoading", false);
    },
  },
};
