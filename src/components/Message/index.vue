<template>
  <div class="message-container">
    <MessageForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <MessageList :list="list" />
    <div class="loading" v-loading="isListLoading">
      {{ list.length > total ? "没有更多了" : "" }}
    </div>
  </div>
</template>

<script>
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

export default {
  props: {
    // 列表标题
    title: {
      type: String,
      default: "",
    },
    // 副标题
    subTitle: {
      type: String,
      default: "",
    },
    // 数据列表
    list: {
      type: Array,
      default: () => [],
    },
    // 数据列表是否正在加载中
    isListLoading: {
      type: Boolean,
      default: false,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
  },

  components: {
    MessageForm,
    MessageList,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.less";

.loading {
  height: 80px;
  position: relative;
  text-align: center;
  line-height: 80px;
  color: @gray;
  font-size: 14px;
}
</style>
