/*
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-06-27 20:25:55
 * @LastEditors: sj
 * @LastEditTime: 2022-06-27 21:37:33
 */
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: "./src/main.js", // 入口
  output: {
    path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
    filename: "bundle.js" // 出口文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
      filename: 'index.html' // 生成文件的名称
    }),
    // new CleanWebpackPlugin()
    new VueLoaderPlugin()
  ],
  devServer: {
    open: true,
  },
module:{
  rules:[
    {
      test: /\.css$/, // 匹配所有的css文件
      use: [ "style-loader", "css-loader"]
    },
{
  test: /\.less$/, // 匹配执行类型的文件
  use: [ "style-loader", "css-loader", 'less-loader']
    },
    // webpack4
    // {
    //   test: /\.(png|jpg|gif|jpeg)$/i,
    //  use:[
    //   {
    //     loader: 'url-loader',
    //     options: {
    //       limit: 8 * 1024,
    //     },
    //   }
    //  ]
    // }
    // webpack5
    {
      test: /\.(png|jpg|gif|jpeg)$/i,
      type: 'asset',
    },
    //   { // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
    //     test: /\.(eot|svg|ttf|woff|woff2)$/,
    //     type: 'asset/resource',
    //     generator: {
    //       filename: 'font-[name].[hash:6][ext]'
    //     }
    // }
    { // 处理字体图标的解析
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 2 * 1024,
            // 配置输出的文件名
            name: '[name].[ext]',
            // 配置输出的文件目录
            outputPath: "fonts/"
          }
        }
      ]
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
        }
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
  ]
}
}