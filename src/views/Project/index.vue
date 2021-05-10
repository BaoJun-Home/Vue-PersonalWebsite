<template>
  <div class="project-container" v-loading="loading" ref="mainContainer">
    <ul class="project-list">
      <li v-for="item in datas" :key="item.id" class="project-item">
        <div class="thumb">
          <a
            :href="
              item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
            "
            :target="item.url ? '_blank' : '_self'"
          >
            <img v-lazy="item.thumb" :alt="item.title" />
          </a>
        </div>
        <div class="content">
          <a
            :href="
              item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
            "
            :target="item.url ? '_blank' : '_self'"
          >
            <h2>{{ item.name }}</h2>
          </a>
          <a
            :href="item.github"
            v-if="item.github"
            target="_blank"
            class="github"
          >
            github
          </a>
          <p v-for="desc in item.description" :key="desc">
            {{ desc }}
          </p>
        </div>
      </li>
    </ul>
    <Empty v-if="datas.length === 0 && !loading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll";
import Empty from "@/components/Empty";

export default {
  name: "Project",
  components: {
    Empty,
  },
  mixins: [mainScroll],
  computed: mapState("project", ["loading", "datas"]),
  created() {
    this.$store.dispatch("project/getProject");
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.less";

.project-container {
  overflow-y: auto;
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  .project-item {
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    &:hover {
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5),
        -1px -1px 3px rgba(0, 0, 0, 0.5);
    }
    .thumb {
      margin-right: 20px;
      flex: 0 0 auto;
      img {
        width: 200px;
        height: 150px;
      }
    }
    .content {
      h2 {
        margin: 0;
        margin-bottom: 10px;
      }
      .github {
        color: @primary;
        font-weight: bold;
      }
      p {
        font-size: 14px;
      }
    }
  }
}
</style>
