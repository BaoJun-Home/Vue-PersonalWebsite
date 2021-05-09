<template>
  <div class="pager-container" v-if="totalNumber > 1">
    <a :class="{ disabled: current === 1 }" @click="handleClick(1)">首页</a>
    <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)">
      上一页
    </a>
    <a
      v-for="page in pageList"
      :key="page"
      :class="{ active: page === current }"
      @click="handleClick(page)"
    >
      {{ page }}
    </a>
    <a
      :class="{ disabled: current === totalNumber }"
      @click="handleClick(current + 1)"
    >
      下一页
    </a>
    <a
      :class="{ disabled: current === totalNumber }"
      @click="handleClick(totalNumber)"
    >
      尾页
    </a>
  </div>
</template>

<script>
export default {
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // 可见的最大数字页码数量
    showNumber: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    // 总页码数
    totalNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 最小的数字页码
    minNumber() {
      let min = this.current - Math.floor(this.showNumber / 2);
      if (min < 1) min = 1;
      return min;
    },
    // 最大的数字页码
    maxNumber() {
      let max = this.minNumber + this.showNumber - 1;
      if (max > this.totalNumber) max = this.totalNumber;
      return max;
    },
    // 页码数组
    pageList() {
      const pages = [];
      for (let i = this.minNumber; i <= this.maxNumber; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage === this.current || newPage < 1 || newPage > this.totalNumber)
        return;
      this.$emit("changePage", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.less";

.pager-container {
  text-align: center;
  margin: 30px 0;
  box-sizing: border-box;
  a {
    user-select: none;
    color: @primary;
    font-size: 14px;
    margin: 0 8px;
    &.disabled {
      cursor: not-allowed;
      color: @gray;
    }
    &.active {
      cursor: text;
      color: @dark;
      font-weight: bold;
    }
  }
}
</style>
