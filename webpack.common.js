const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/app.js',
  output: {
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(le|c)ss$/,
        use:[
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]-[local]-[hash:5]'
              }
            }
          },
          'postcss-loader',
          'less-loader'
        ],
        exclude: /node_modules/
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
      $com: path.resolve(__dirname, 'components'),
    },
    extensions: ['.js', '.json', '.jsx', '.ts'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        verdor: {
          chunks: 'all',
          name: 'verdor',
          priority: -10,
          test: /node_modules/
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin({path: path.resolve(__dirname, 'dist')}),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'react-sp-page',
      template: './index.html',
      // minify: {collapseWhitespace: true}
    })
  ],
}