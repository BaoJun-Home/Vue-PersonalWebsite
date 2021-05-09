<template>
  <div
    class="banner-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="banner-img" ref="inside" :style="imgPosition">
      <ImageLoader
        :url="banner.bigImg"
        :placeholder="banner.midImg"
        @loaded="handleLoaded"
      />
    </div>
    <div class="slogan">
      <h2 class="title" ref="title" @transitionend="handleTransitionEnd">
        {{ banner.title }}
      </h2>
      <p class="desc" ref="desc">{{ banner.description }}</p>
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";

export default {
  props: ["banner"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      containerSize: null, // 外层容器的尺寸
      insideSize: null, // 内层图片的尺寸
      mouseInfo: null, // 鼠标的位置信息
    };
  },
  computed: {
    imgPosition() {
      // 多出来的尺寸
      if (!this.insideSize || !this.containerSize || !this.mouseInfo) return;
      const moreWidth = this.insideSize.width - this.containerSize.width;
      const moreHeight = this.insideSize.height - this.containerSize.height;
      // 需要移动的尺寸 = -多出来的尺寸 / 容器的尺寸 * 鼠标距离容器的距离
      const left = -(moreWidth / this.containerSize.width) * this.mouseInfo.x;
      const top = -(moreHeight / this.containerSize.height) * this.mouseInfo.y;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
  },
  methods: {
    handleLoaded() {
      this.handleSlogan("title");
    },
    handleTransitionEnd() {
      this.handleSlogan("desc");
    },
    // 处理标语区域
    handleSlogan(ref) {
      const dom = this.$refs[ref];
      const width = dom.clientWidth;
      dom.style.width = 0;
      dom.style.opacity = 1;
      dom.clientHeight; // 强行渲染
      dom.style.transition = "all 1s linear";
      dom.style.width = width + "px";
    },
    handleMouseMove(e) {
      const { left, top } = this.$refs.container.getBoundingClientRect();
      this.mouseInfo = {
        x: e.clientX - left,
        y: e.clientY - top,
      };
    },
    handleMouseLeave() {
      this.resizeMouseInfo();
    },
    // 重新设置鼠标的位置信息
    resizeMouseInfo() {
      this.mouseInfo = {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
    // 窗口改变时执行
    handleResize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.insideSize = {
        width: this.$refs.inside.clientWidth,
        height: this.$refs.inside.clientHeight,
      };
    },
  },
  mounted() {
    this.handleResize();
    this.resizeMouseInfo();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";

.banner-item-container {
  .fill-container(relative);
  width: 100%;
  height: 100%;
  letter-spacing: 3px;
  overflow: hidden;

  .banner-img {
    width: 105%;
    height: 105%;
    transition: all 0.3s;
  }
  .slogan {
    .self-center();
    transform: translateY(-50%);
    left: 30px;
    color: #fff;
    white-space: nowrap;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5), -1px -1px 0 rgba(0, 0, 0, 0.5);
    .title {
      opacity: 0;
      overflow: hidden;
      font-size: 2em;
    }
    .desc {
      opacity: 0;
      overflow: hidden;
      font-size: 1.1em;
    }
  }
}
</style>
