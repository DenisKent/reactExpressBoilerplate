const merge = require("webpack-merge");
const webpackBase = require("./webpack.base.config.js");

module.exports = merge(webpackBase, {
  mode: 'production',
});
