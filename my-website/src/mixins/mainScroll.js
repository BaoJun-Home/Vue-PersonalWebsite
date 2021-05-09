export default {
  mounted() {
    this.$refs.mainContainer.addEventListener("scroll", this.handleMainScroll);
    this.$eventBus.$on("setMainScroll", this.handelsetMainScroll);
  },
  beforeDestroy() {
    this.$eventBus.$emit("mainScroll");
    this.$eventBus.$emit("setMainScroll");
    this.$eventBus.$off("setMainScroll", this.handelsetMainScroll);
    this.$refs.mainContainer.removeEventListener(
      "scroll",
      this.handleMainScroll
    );
  },
  methods: {
    handelsetMainScroll(scrollTop) {
      this.$refs.mainContainer.scrollTop = scrollTop;
    },
    handleMainScroll() {
      this.$eventBus.$emit("mainScroll", this.$refs.mainContainer);
    },
  },
};
