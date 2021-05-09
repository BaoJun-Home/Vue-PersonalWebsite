<template>
  <ul class="message-list-container">
    <li v-for="item in list" :key="item.id">
      <div class="avatar">
        <Avatar :url="item.avatar" :size="50" />
      </div>
      <div class="content">
        <div class="name">{{ item.nickname }}</div>
        <div class="desc">{{ item.content }}</div>
      </div>
      <div class="date">{{ formatDate(item.createDate, true) }}</div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
import { formatDate } from "@/utils";

export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Avatar,
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.less";

.message-list-container {
  li {
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid @gray;
    position: relative;
    .avatar {
      width: 50px;
      height: 50px;
      flex: 0 0 auto;
      margin-right: 15px;
    }
    .name {
      color: darken(@success, 5%);
      margin-bottom: 10px;
    }
    .desc {
      font-size: 14px;
    }
    .content {
      flex: 1 1 auto;
    }
    .date {
      font-size: 12px;
      color: @gray;
      position: absolute;
      right: 10px;
      top: 18px;
    }
  }
}
</style>
