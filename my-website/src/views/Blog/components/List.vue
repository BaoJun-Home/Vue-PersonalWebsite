<template>
  <ul class="blog-list-container">
    <li v-for="item in list" :key="item.id">
      <div class="item" @click="handleClick(item)">
        <span class="title" :class="{ active: item.isActive }">
          {{ item.name }}
        </span>
        <span class="aside" :class="{ active: item.isActive }">
          {{ item.aside }}
        </span>
      </div>
      <List v-if="item.children" :list="item.children" @active="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (item.isActive) return;
      this.$emit("active", item);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.less";

.blog-list-container {
  user-select: none;
  .blog-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    .item {
      cursor: pointer;
      .title {
        margin-right: 10px;
      }
      .aside {
        font-size: 12px;
        color: @gray;
      }
      .active {
        color: @warn;
        font-weight: bold;
      }
    }
  }
}
</style>
