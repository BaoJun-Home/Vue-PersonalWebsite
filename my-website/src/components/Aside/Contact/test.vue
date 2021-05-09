<template>
  <div class="container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
import "@/styles/global.less";

export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.less";

.container {
  width: 300px;
  height: 500px;
  margin: 200px auto;
  border: 2px solid;
  background: @dark;
}
</style>
