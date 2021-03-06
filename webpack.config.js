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
  devServer: {
    //webpack.config.js
    port: 3000, // 端口号
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', //以此文件为模板
      filename: 'index.html', //生成的文件名
    }),
  ],
  //处理css文件
  module: {
    //加载器配置
    rules: [
      // loader的规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: ['style-loader', 'css-loader'],
      },
      //less部分
      {
        test: /\.less$/,
        // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
        use: ['style-loader', 'css-loader', 'less-loader'],
      },

      // { //图片配置 webpack4版本
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
      //       // 配置limit, 超过8k, 不转, file-loader复制, 随机名, 输出文件
      //       options: {
      //         limit: 8 * 1024,
      //       },
      //     },
      //   ],
      // },

      {
        //图片配置 webpack5版本
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: 'asset',
        // type: 'asset/inline'  //直接转成base64
        //默认把＞8kb的不转成base64，通过parser进行修改
        // parser: { // 解析器 规则
        //   dataUrlCondition: { // dataUrl的情况
        //     maxSize: 30 * 1024,
        //     // maxSize 限制最大值
        //   },
        // },
      },

      {
        // iconfont配置，直接配置
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource', //全部输出到dist文件下
        generator: {
          //生成文件的名字的定义规则
          filename: 'font-[name].[hash:6][ext]',
        },
      },

      //需要匹配低版本的浏览器的配置
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // 预设:转码规则(用bable开发环境本来预设的)
          },
        },
      },

      //引入app.vue
      {
        test: /\.vue$/, // 匹配所有的vue文件
        use: [ "html-loader","style-loader", "css-loader"]
      },
    ],
  },
};
