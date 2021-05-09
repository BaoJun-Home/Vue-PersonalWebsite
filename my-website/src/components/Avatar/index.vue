<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
    alt=""
  />
</template>

<script>
export default {
  props: {
    // 头像地址
    url: {
      type: String,
      required: true,
    },
    // 头像尺寸
    size: {
      type: Number,
      default: 150,
    },
  },
};
</script>

<style lang="less" scoped>
.avatar-container {
  object-fit: cover;
  display: block;
  border-radius: 50%;
}
</style>
