module.exports = {
  devServer: {
    proxy: {
      "^/contacts": {
        target: "http://localhost:5000",
      },
    },
  },
};
