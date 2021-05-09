<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ title }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  props: {
    // 图标标题文字
    title: {
      type: String,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/colors.less";

.empty-container {
  .self-center();
  display: inline-block;
  text-align: center;
  color: @gray;
  .icon-container {
    font-size: 80px;
  }
  p {
    color: darken(@gray, 10%);
  }
}
</style>
