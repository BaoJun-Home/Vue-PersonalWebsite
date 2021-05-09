<template>
  <div class="blog-detail-container">
    <h1>{{ blogInfo.title }}</h1>
    <div class="aside">
      <span>日期：{{ formatDate(blogInfo.createDate) }}</span>
      <span>浏览：{{ blogInfo.scanNumber }}</span>
      <a href="#comment-area">评论：{{ blogInfo.commentNumber }}</a>
      <RouterLink
        :to="{
          name: 'Category',
          params: {
            categoryId: blogInfo.category.id,
          },
        }"
      >
        {{ blogInfo.category.name }}
      </RouterLink>
    </div>
    <div class="markdown-body" v-html="blogInfo.htmlContent"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";

export default {
  props: ["blogInfo"],
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.less";

.blog-detail-container {
  .aside {
    font-size: 12px;
    color: @gray;
    span,
    a {
      margin-right: 10px;
    }
  }
  .markdown-body {
    margin: 30px 0;
  }
}
</style>
