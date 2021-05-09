<template>
  <div class="menu-container">
    <RouterLink
      :exact="item.exact"
      active-class="active"
      exact-active-class=""
      v-for="item in itemList"
      :to="{ name: item.name }"
      :key="item.link"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  data() {
    return {
      itemList: [
        {
          name: "Home",
          icon: "home",
          title: "首页",
          exact: true, // 是否精确匹配才有激活样式
        },
        {
          name: "Blog",
          icon: "blog",
          title: "文章",
          exact: false,
        },
        {
          name: "About",
          icon: "about",
          title: "关于我",
          exact: true,
        },
        {
          name: "Project",
          icon: "code",
          title: "项目&效果",
          exact: true,
        },
        {
          name: "Message",
          icon: "message",
          title: "留言板",
          exact: true,
        },
      ],
    };
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colors.less";

.menu-container {
  margin-top: 30px;
  margin-bottom: 20px;
  box-sizing: border-box;
  color: @gray;
  a {
    display: flex;
    align-items: center;
    padding: 0 50px;
    box-sizing: border-box;
    height: 45px;
    line-height: 45px;
    &:hover {
      color: #fff;
    }
    &.active {
      background: lighten(@dark, 8%);
    }
    .icon {
      width: 26px;
      font-size: 16px;
    }
  }
}
</style>
