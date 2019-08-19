const path = require('path');
const px2rem = require('postcss-px2rem');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let webpack = require('webpack');

module.exports = {
  entry: './src/App/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sc|c)ss$/,
        use:[
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // 是否开启css-module
              localIdentName: '[name]_[local]-[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [px2rem({remUnit: 75})]
            }
          },
          'sass-loader'
        ],
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: 'images/'   // 图片打包后存放的目录
            }
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      component: path.resolve(__dirname, 'src'),
      component: path.resolve(__dirname, './components'),
    },
    extensions: ['.js', '.json', '.jsx'],
  },
  
  plugins: [
    new CleanWebpackPlugin({path: path.resolve(__dirname, 'dist')}),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    port: 3000,
    compress: true
  }
}