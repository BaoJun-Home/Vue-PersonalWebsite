<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <List :list="finalToc" @active="handleActive" />
  </div>
</template>

<script>
import List from "./List";
import { debounce } from "@/utils";

export default {
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  components: {
    List,
  },
  computed: {
    // 根据原始 TOC 数组和 this.activeAnchor 的值得到一个具有 isActive 属性的数组
    finalToc() {
      const getFinalToc = (toc = []) => {
        return toc.map((item) => ({
          ...item,
          isActive: item.anchor === this.activeAnchor,
          children: getFinalToc(item.children),
        }));
      };
      return getFinalToc(this.toc);
    },
    doms() {
      const doms = [];
      const getDoms = (toc = []) => {
        for (const item of toc) {
          doms.push(document.getElementById(item.anchor));
          if (item.children && item.children.length > 0) {
            getDoms(item.children);
          }
        }
      };
      getDoms(this.toc);
      return doms;
    },
  },
  created() {
    // 防抖函数
    this.debounceFunc = debounce(this.setActiveDom, 150);
    this.$eventBus.$on("mainScroll", this.debounceFunc);
  },
  beforeDestroy() {
    this.$eventBus.$off("mainScroll", this.debounceFunc);
  },
  methods: {
    handleActive(item) {
      location.hash = item.anchor;
    },
    setActiveDom(activeDom) {
      if (!activeDom) return;
      this.activeAnchor = "";
      const gap = 200;
      for (const dom of this.doms) {
        if (!dom) continue;
        const { top } = dom.getBoundingClientRect();
        if (top >= 0 && top <= gap) {
          // 在规定范围内，其他元素不是激活状态
          this.activeAnchor = dom.id;
          return;
        } else if (top > gap) {
          // 在规定范围的下面，后面的元素肯定不是激活状态
          return;
        } else {
          // 在规定范围的上面，如果后面的元素有激活的，则它不激活，如果后面没有激活的，则它激活
          this.activeAnchor = dom.id; // 把自己是激活状态，如果上面的某个条件满足，这里的激活状态自然就清空了
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.less";

.blog-toc-container {
  h2 {
    font-size: 1.1em;
    font-weight: bold;
  }
  .active {
    color: @warn;
  }
}
</style>
