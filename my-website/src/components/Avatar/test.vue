<template>
  <div class="container">
    <Avatar
      url="https://img1.baidu.com/it/u=696070886,3026076470&fm=26&fmt=auto&gp=0.jpg"
    />
    <Avatar
      url="https://img2.baidu.com/it/u=2096251048,2548614059&fm=26&fmt=auto&gp=0.jpg"
      :size="150"
    />
  </div>
</template>

<script>
import Avatar from "./";
export default {
  components: {
    Avatar,
  },
};
</script>
