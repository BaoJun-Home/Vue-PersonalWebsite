const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

if (process.env.NODE_ENV === "production") {
  // 生成环境配置
  module.exports = {
    devtool: "none",
    plugins: [new BundleAnalyzerPlugin()],
    externals: {
      // 不要对公共库进行打包，公共库使用 CDN
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      axios: "axios",
    },
  };
} else {
  // 开发环境配置
  module.exports = {};
}
