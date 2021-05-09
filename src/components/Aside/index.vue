<template>
  <div class="aside-container">
    <Avatar :url="datas.avatar" v-if="datas" />
    <h1 class="title" v-if="datas">{{ datas.siteTitle }}</h1>
    <Menu />
    <Contact v-if="datas" />
    <p class="footer" v-if="datas">{{ datas.icp }}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
import { mapState } from "vuex";

export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
  computed: {
    ...mapState("setting", ["datas"]),
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
    font-size: 1.3em;
  }
  .footer {
    text-align: center;
    font-size: 12px;
  }
}
</style>
