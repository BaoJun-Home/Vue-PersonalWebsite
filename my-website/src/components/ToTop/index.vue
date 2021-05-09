<template>
  <div class="to-top-container" v-show="show" @click="handleClick">Top</div>
</template>

<script>
import { debounce } from "@/utils";

export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.debounceFunc = debounce(this.handleMainScroll, 100);
    this.$eventBus.$on("mainScroll", this.debounceFunc);
  },
  beforeDestroy() {
    this.$eventBus.$off("mainScroll", this.debounceFunc);
  },
  methods: {
    handleMainScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 500;
    },
    handleClick() {
      this.$eventBus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.less";

.to-top-container {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  border-radius: 50%;
  font-weight: bold;
  color: #fff;
  background: @primary;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  z-index: 999;
  user-select: none;
}
</style>
