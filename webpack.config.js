const path = require('path');
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development', //开发阶段模式
  entry: './src/main.js', // 修改入口文件名
  output: {
    path: path.join(__dirname, 'dist'), // 出口路径及其文件夹名字
    filename: 'bundle.js', // 修改出口文件名
  },
  devServer: { //webpack.config.js
    port: 3000, // 端口号
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', //以此文件为模板
      filename: 'index.html',    //生成的文件名
    }),
  ],
};
