<template>
  <i class="icon-container iconfont" :class="iconClass"></i>
</template>

<script>
const iconMap = {
  blog: "icon-blog",
  qq: "icon-qq",
  weixin: "icon-weixin",
  arrowDown: "icon-iconfonticonfonti2",
  arrowUp: "icon-iconfonticonfonti2copy",
  warn: "icon-iconfontcolor100-copy",
  code: "icon-code",
  info: "icon-xinxi",
  success: "icon-Group-",
  email: "icon-email",
  empty: "icon-empty",
  close: "icon-guanbi",
  github: "icon-github",
  home: "icon-home",
  about: "icon-set_about_hov",
  error: "icon-cuowu",
  message: "icon-liuyan",
};

export const keys = Object.keys(iconMap);

export default {
  props: {
    // 图标类型
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 最终的图标类名，是根据传入的 type 计算出来的
    iconClass() {
      return iconMap[this.type];
    },
  },
};
</script>

<style lang="less" scoped>
@import "//at.alicdn.com/t/font_2421607_bpk4zd8ufo5.css";

.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
