<template>
  <div class="container">
    <Aside />
  </div>
</template>

<script>
import Aside from "./";
import "@/styles/global.less";

export default {
  components: {
    Aside,
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 250px;
  height: 100vh;
  border: 2px solid red;
  box-sizing: border-box;
}
</style>
