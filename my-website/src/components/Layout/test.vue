<template>
  <div class="container">
    <Layout>
      <template #left>
        <div class="left">fdsjfodsufoidsufoidsufodsufdsofudosiuoi</div>
      </template>
      <div class="main">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore vitae
        mollitia ipsum aliquam labore et ab temporibus velit excepturi voluptas
        rerum neque dolorum quas, architecto inventore porro illum qui unde eos
        ut accusantium! Nam similique laborum eos perspiciatis, mollitia veniam
        nesciunt minima fugit magnam maxime quod, eaque nulla magni
        exercitationem.
      </div>
      <!-- <template #right>
        <div class="right">fdsjfodsufoidsufoidsufodsufdsofudosiuoi</div>
      </template> -->
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
import "@/styles/global.less";

export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 80%;
  height: 500px;
  border: 1px solid;
  white-space: nowrap;

  .left {
    width: 200px;
    height: 100%;
    background: red;
    opacity: 0.5;
  }
  .main {
    width: 100%;
    height: 100%;
    background: green;
    padding-top: 100px;
    opacity: 0.5;
  }
  .right {
    width: 200px;
    height: 100%;
    background: blue;
    opacity: 0.5;
  }
}
</style>
