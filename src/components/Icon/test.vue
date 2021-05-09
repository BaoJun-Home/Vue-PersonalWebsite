<template>
  <div class="container">
    <div class="item" v-for="key in keys" :key="key">
      <Icon :type="key" />
      <div>{{ key }}</div>
    </div>
  </div>
</template>

<script>
import Icon, { keys } from "./";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      keys,
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .item {
    text-align: center;
    margin: 20px 30px;
  }
}
</style>
