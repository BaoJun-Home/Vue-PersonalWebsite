<template>
  <div class="blog-list-container" ref="mainContainer" v-loading="isLoading">
    <ul class="blog-list">
      <li v-for="item in datas.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink :to="{ name: 'Detail', params: { blogId: item.id } }">
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <div class="title">
            <RouterLink :to="{ name: 'Detail', params: { blogId: item.id } }">
              <h2>{{ item.title }}</h2>
            </RouterLink>
          </div>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'Category',
                params: { categoryId: item.category.id },
              }"
            >
              {{ item.category.name }}
            </RouterLink>
          </div>
          <div class="desc">{{ item.description }}</div>
        </div>
      </li>
    </ul>
    <Pager
      v-if="datas.total"
      :total="datas.total"
      :current="routeInfo.page"
      :limit="routeInfo.limit"
      :showNumber="10"
      @changePage="handleChangePage"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData";
import { fetchBlogs } from "@/api/blog";
import { formatDate } from "@/utils";
import mainScroll from "@/mixins/mainScroll";

export default {
  mixins: [fetchData({}), mainScroll],
  components: {
    Pager,
  },
  computed: {
    // 获取路由信息
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  watch: {
    async $route() {
      if (this.isLoading) return;
      this.isLoading = true;
      this.$refs.mainContainer.scrollTop = 0;
      this.datas = await this.fetchData();
      this.isLoading = false;
    },
  },

  methods: {
    async fetchData() {
      return await fetchBlogs(this.routeInfo);
    },
    formatDate,
    handleChangePage(newPage) {
      // 页面变化改变路由
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
        // 获取全部：/blog?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // 获取分类：/blog/${this.$route.params.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "Category",
          params: {
            categoryId: this.routeInfo.categoryId,
          },
          query,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/colors.less";

.blog-list-container {
  .fill-container(relative);
  padding: 20px 30px;
  box-sizing: border-box;
  overflow-y: scroll;
  scroll-behavior: smooth;
  .blog-list {
    li {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid @gray;
      .thumb {
        flex: 0 0 auto;
        width: 200px;
        height: 150px;
        margin-right: 10px;
        border-radius: 5px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .main {
        h2 {
          margin: 0;
        }
        .aside {
          font-size: 12px;
          color: @gray;
          margin-top: 8px;
          margin-bottom: 10px;
          span {
            margin-right: 10px;
          }
        }
      }
      .desc {
        font-size: 14px;
      }
    }
  }
}
</style>
