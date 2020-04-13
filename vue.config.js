var webpack = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
module.exports = {
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
  },
  publicPath: "/statement/",
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      new CompressionWebpackPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: new RegExp("\\.(js|css)$"),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }
};
