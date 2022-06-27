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
    //处理css文件
    module: { //加载器配置
      rules: [ // loader的规则
        {
          test: /\.css$/, // 匹配所有的css文件
          // use数组里从右向左运行
          // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
          // 再用 style-loader 将样式, 把css插入到dom中
          use: [ "style-loader", "css-loader"]
        }
      ]
  }
};
