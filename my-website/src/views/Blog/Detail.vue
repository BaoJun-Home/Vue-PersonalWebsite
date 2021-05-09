<template>
  <Layout>
    <div class="blog-detail" ref="mainContainer" v-loading="isLoading">
      <BlogDetail :blogInfo="datas" v-if="!isLoading" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="toc-container" v-loading="isLoading">
        <BlogTOC :toc="datas.toc" v-if="!isLoading" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { fetchBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import mainScroll from "@/mixins/mainScroll";

export default {
  mixins: [fetchData({}), mainScroll],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  computed: {
    blogId() {
      return this.$route.params.blogId || -1;
    },
  },
  updated() {
    // 组件更新完毕后重新设置 hash 值
    const hash = location.hash;
    location.hash = "";
    this.$refs.mainContainer.clientHeight;
    location.hash = hash;
  },
  methods: {
    async fetchData() {
      return await fetchBlog(this.blogId);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";

.blog-detail {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
  padding: 20px 30px;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.toc-container {
  width: 300px;
  height: 100%;
  overflow-y: auto;
  position: relative;
  padding: 20px 30px;
  box-sizing: border-box;
}
</style>
