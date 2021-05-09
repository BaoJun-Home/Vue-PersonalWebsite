module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://www.baojun.com",
      },
    },
  },
};
