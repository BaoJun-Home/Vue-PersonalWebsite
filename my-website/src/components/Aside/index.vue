<template>
  <div class="aside-container">
    <Avatar url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c" />
    <h1 class="title">kevin-site</h1>
    <Menu />
    <Contact />
    <p class="footer">河北省 - 廊坊市</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";

export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/colors.less";

.aside-container {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: @dark;
  padding: 30px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  .avatar-container {
    margin: 0 auto;
  }
  .title {
    text-align: center;
    color: #fff;
    font-size: 1.5em;
  }
  .footer {
    text-align: center;
    font-size: 12px;
  }
}
</style>
