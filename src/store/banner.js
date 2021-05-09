import { fetchBanners } from "@/api/banner";

export default {
  namespaced: true, // 开启命名空间
  state: {
    loading: false,
    datas: [],
  },
  mutations: {
    setDatas(state, payload) {
      state.datas = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async getBanners({ commit, state }) {
      if (state.datas.length > 0) return; // 如果已经获取过 banner 数据，不需要重新获取
      commit("setLoading", true);
      const result = await fetchBanners();
      commit("setDatas", result);
      commit("setLoading", false);
    },
  },
};
