<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <List :list="finalDatas" @active="handleActive" />
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import List from "./List";
import { fetchBlogClassify } from "@/api/blog";

export default {
  mixins: [fetchData([])],
  components: {
    List,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    // 最终的数据
    finalDatas() {
      // 文章总数
      const total = this.datas.reduce((s, item) => s + item.articleCount, 0);
      return [
        {
          id: -1,
          name: "全部",
          articleCount: total,
        },
        ...this.datas,
      ].map((item) => ({
        ...item,
        isActive: item.id === this.categoryId,
        aside: item.articleCount + "篇",
      }));
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
  },
  methods: {
    async fetchData() {
      return await fetchBlogClassify();
    },
    handleActive(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "Category",
          params: {
            categoryId: item.id,
          },
          query,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/colors.less";

.blog-category-container {
  width: 300px;
  height: 100%;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  h2 {
    font-size: 1.1em;
    font-weight: bold;
  }
  .active {
    color: @warn;
  }
}
</style>
