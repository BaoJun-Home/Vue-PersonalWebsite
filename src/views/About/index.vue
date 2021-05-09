<template>
  <div class="about-container" v-loading="loading || !iframeLoaded">
    <iframe v-if="!loading" :src="src" @load="iframeLoaded = true"></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      iframeLoaded: false,
    };
  },
  computed: {
    ...mapState("about", {
      src: "datas",
      loading: "loading",
    }),
  },
  created() {
    this.$store.dispatch("about/getAbout");
  },
};
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  iframe {
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>
