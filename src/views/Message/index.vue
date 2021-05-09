<template>
  <div class="message-wrapper" ref="mainContainer" v-loading="isLoading">
    <Message
      title="留言板"
      :subTitle="`（${datas.total}）`"
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
import { getMessages, postMessage } from "@/api/message";
import fetchMore from "@/mixins/fetchMore";
import mainScroll from "@/mixins/mainScroll";

export default {
  name: "Msg",
  mixins: [fetchData({ total: 0, rows: [] }), fetchMore, mainScroll],
  data() {
    return {
      page: 1,
      limit: 10,
      gap: 100,
    };
  },
  components: {
    Message,
  },
  methods: {
    async fetchData() {
      return await getMessages({ page: this.page, limit: this.limit });
    },
    async handleSubmit(comment, callback) {
      const resp = await postMessage({
        ...comment,
      });
      this.datas.rows.unshift(resp);
      this.datas.total++;
      callback("感谢评论");
    },
  },
};
</script>

<style lang="less" scoped>
.message-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
  position: relative;
  padding: 30px 0;
  box-sizing: border-box;
  .message-container {
    width: 50%;
    height: 50%;
    margin: 0 auto;
  }
}
</style>
