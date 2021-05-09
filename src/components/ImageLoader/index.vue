<template>
  <div class="image-loader-container">
    <img class="place" :src="placeholder" v-if="isShowPlace" alt="" />
    <img
      :src="url"
      :style="{
        opacity: originOpacity,
        transition: `all ${duration}ms`,
      }"
      @load="handleLoad"
      @transitionend="handleTransitionEnd"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false, // 原图是否加载完成
      isShowPlace: true, // 是否展示占位图
    };
  },
  props: {
    // 原图地址
    url: {
      type: String,
      required: true,
    },
    // 占位图地址
    placeholder: {
      type: String,
      required: true,
    },
    // 占位图切换到原图经历的毫秒数
    duration: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    // 原图的透明度
    originOpacity() {
      return this.isLoaded ? 1 : 0;
    },
  },

  methods: {
    handleLoad() {
      this.isLoaded = true;
    },
    handleTransitionEnd() {
      this.$emit("loaded");
      this.isShowPlace = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";

.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .fill-container();
    object-fit: cover;
    &.place {
      filter: blur(2vw);
    }
  }
}
</style>
