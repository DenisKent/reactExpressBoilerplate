const merge = require("webpack-merge");
const webpack = require("webpack")
const webpackBase = require("./webpack.base.config.js");

module.exports = merge(webpackBase, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    contentBase: './dist',
    proxy: { '/api': { target: 'http://localhost:5000', secure: false } },
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({})
  ],
});
