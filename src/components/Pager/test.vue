<template>
  <div class="container">
    <Pager :current="current" :total="total" @changePage="current = $event" />

    <h1 v-show="show">Hello Vue</h1>
    <button @click="show = !show">显示/隐藏</button>
  </div>
</template>

<script>
import Pager from "./";
import "@/styles/global.less";

export default {
  data() {
    return {
      current: 1,
      total: 132,
      limit: 10,
      show: true,
    };
  },
  components: {
    Pager,
  },
};
</script>

<style lang="less" scoped></style>
