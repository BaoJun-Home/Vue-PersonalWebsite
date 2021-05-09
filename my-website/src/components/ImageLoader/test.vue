<template>
  <div class="container">
    <ImageLoader
      url="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @loaded="handleLoaded"
      :duration="1000"
    />
  </div>
</template>

<script>
import ImageLoader from "./";

export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("图片切换完毕");
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
}
</style>
