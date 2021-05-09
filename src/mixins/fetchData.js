// 用户远程获取数据
export default function fetchData(datas = null) {
  return {
    data() {
      return {
        datas, // 数据对象
        isLoading: true, // 是否正在加载中
      };
    },
    async created() {
      this.datas = await this.fetchData();
      this.isLoading = false;
    },
  };
}
