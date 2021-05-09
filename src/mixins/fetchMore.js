export default {
  created() {
    this.$eventBus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$eventBus.$off("mainScroll", this.handleScroll);
  },
  computed: {
    hasMore() {
      return this.datas.rows.length < this.datas.total;
    },
  },
  methods: {
    handleScroll(dom) {
      if (!dom) return;
      const dist = dom.scrollHeight - dom.scrollTop - dom.clientHeight;
      if (dist <= this.gap && !this.isLoading) {
        this.fetchMoreData();
      }
    },
    async fetchMoreData() {
      if (!this.hasMore) return;
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.datas.rows = [...this.datas.rows, ...resp.rows];
      this.isLoading = false;
    },
  },
};
