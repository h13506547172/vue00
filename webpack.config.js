const path = require('path');
module.exports = {
  mode: 'development', //开发阶段模式
  entry: './src/main.js', // 修改入口文件名
  output: {
    path: path.join(__dirname, 'dist'), // 出口路径及其文件夹名字
    filename: 'bundle.js', // 修改出口文件名
  },
};
