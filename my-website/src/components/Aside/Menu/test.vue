<template>
  <div class="container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";

export default {
  components: {
    Menu,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.less";

.container {
  width: 300px;
  height: 500px;
  border: 2px solid;
  margin: 0 auto;
  background: @dark;
}
</style>
