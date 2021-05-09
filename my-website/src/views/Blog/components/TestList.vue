<template>
  <List :list="list" @active="handleActive" />
</template>

<script>
import List from "./List";
import "@/styles/global.less";

export default {
  components: {
    List,
  },
  data() {
    return {
      list: [
        { title: "a", isActive: false },
        { title: "b", isActive: false },
        {
          title: "c",
          isActive: true,
          children: [
            { title: "c-1", isActive: false },
            { title: "c-2", isActive: true },
            { title: "c-3", isActive: false },
            {
              title: "c-4",
              isActive: true,
              children: [
                { title: "c-4-1", isActive: false },
                { title: "c-4-2", isActive: true },
                { title: "c-4-3", isActive: false },
              ],
            },
          ],
        },
        {
          title: "d",
          isActive: false,
          children: [
            { title: "d-1", isActive: true },
            { title: "d-2", isActive: false },
            { title: "d-3", isActive: false },
          ],
        },
      ],
    };
  },
  methods: {
    handleActive(item) {
      console.log(item);
    },
  },
};
</script>
