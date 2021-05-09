<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="site-aside">
          <Aside />
        </div>
      </template>
      <RouterView />
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "./components/Layout";
import Aside from "./components/Aside";
import ToTop from "./components/ToTop";

export default {
  name: "App",
  components: {
    Layout,
    Aside,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";

#app {
  .fill-container(fixed);
  .site-aside {
    width: 250px;
    height: 100%;
  }
}
</style>
