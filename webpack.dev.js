const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(c|sc)ss$/,
        use:[
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]-[local]-[hash:5]'
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(commonConfig, devConfig);