const webpack = require('webpack');
const Merge = require('webpack-merge');
const common = require('./webpack.common');

const devConfig = {
  devServer: {
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = Merge(common, devConfig);