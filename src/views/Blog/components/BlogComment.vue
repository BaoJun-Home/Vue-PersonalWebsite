<template>
  <div class="blog-comment-container">
    <Message
      :subTitle="`（${datas.total}）`"
      title="评论列表"
      :list="datas.rows"
      :isListLoading="isLoading"
      :total="datas.total"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import Message from "@/components/Message";
import fetchData from "@/mixins/fetchData";
import { fetchComments, postComment } from "@/api/blog";
import fetchMore from "@/mixins/fetchMore";

export default {
  mixins: [fetchData({ total: 0, rows: [] }), fetchMore],
  components: {
    Message,
  },
  data() {
    return {
      page: 1,
      limit: 10,
      gap: 100,
    };
  },
  methods: {
    async fetchData() {
      return await fetchComments({
        blogId: this.$route.params.blogId,
        page: this.page,
        limit: this.limit,
      });
    },
    async handleSubmit(comment, callback) {
      const resp = await postComment({
        ...comment,
        blogId: this.$route.params.blogId,
      });
      this.datas.rows.unshift(resp);
      this.datas.total++;
      callback("感谢评论");
    },
  },
};
</script>

<style lang="less" scoped>
.blog-comment-container {
  margin-top: 50px;
}
</style>
