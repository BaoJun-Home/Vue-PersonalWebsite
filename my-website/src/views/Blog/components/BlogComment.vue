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

export default {
  mixins: [fetchData({ total: 0, rows: [] })],
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
  created() {
    this.$eventBus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$eventBus.$off("mainScroll", this.handleScroll);
  },
  computed: {
    hasMore() {
      return this.datas.rows.length < this.datas.total;
    },
  },
  methods: {
    handleScroll(dom) {
      if (!dom) return;
      if (!this.hasMore) return;
      const dist = dom.scrollHeight - dom.scrollTop - dom.clientHeight;
      if (dist <= this.gap && !this.isLoading) {
        this.fetchMoreData();
      }
    },
    async fetchData() {
      return await fetchComments({
        blogId: this.$route.params.blogId,
        page: this.page,
        limit: this.limit,
      });
    },
    // 加载更多评论
    async fetchMoreData() {
      if (!this.hasMore) return;
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.datas.rows = [...this.datas.rows, ...resp.rows];
      this.isLoading = false;
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
