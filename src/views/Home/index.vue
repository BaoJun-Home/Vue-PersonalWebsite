<template>
  <div
    class="home-container"
    ref="container"
    v-loading="loading"
    @wheel="handleWheel"
  >
    <ul
      class="banner-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in datas" :key="item.id">
        <BannerItem :banner="item" />
      </li>
    </ul>
    <div class="arrow up" v-show="index > 0" @click="changeBanner(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="arrow down"
      v-show="index < datas.length - 1"
      @click="changeBanner(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="btns">
      <li
        :class="{ active: index === i }"
        v-for="(item, i) in datas"
        :key="item.id"
        @click="changeBanner(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import BannerItem from "./BannerItem";
import Icon from "@/components/Icon";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    BannerItem,
    Icon,
  },
  data() {
    return {
      index: 0, // 当前显示的横幅索引
      containerHeight: 0, // 容器高度
      isWheel: false, // 是否正在滚动
    };
  },
  created() {
    this.$store.dispatch("banner/getBanners");
  },
  computed: {
    // 横幅容器的的 marginTop 值
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["datas", "loading"]),
  },
  methods: {
    // 切换横幅
    changeBanner(index) {
      if (index === this.index) return;
      this.index = index;
    },
    // 窗口改变时触发
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    // 处理滚轮事件
    handleWheel(e) {
      if (this.isWheel) return; // 当前正在滚动
      if (this.index < this.datas.length - 1 && e.deltaY > 0) {
        // 向下滚动
        this.isWheel = true;
        this.index++;
      } else if (this.index > 0 && e.deltaY < 0) {
        // 向上滚动
        this.isWheel = true;
        this.index--;
      }
    },
    // 过渡效果结束触发
    handleTransitionEnd() {
      this.isWheel = false;
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/colors.less";

.home-container {
  .fill-container(relative);
  overflow: hidden; /* 解决 margin 合并 */
  .banner-container {
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .arrow {
    .self-center();
    font-size: 30px;
    color: @gray;
    cursor: pointer;
    transform: translateX(-50%);
    @gap: 25px;
    &.up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
    @jump: 10px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }
  .btns {
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 30px;
    li {
      width: 8px;
      height: 8px;
      background: @words;
      border-radius: 50%;
      cursor: pointer;
      margin: 15px 0;
      border: 1px solid #fff;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>
