let path = require('path');
// 插件都是一个类，所以我们命名的时候尽量用大写开头
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    // 多页面开发，配置多个入口文件
    index: './src/index.js',
    login: './src/login.js'
  },
  // 出口文件  
  output: {
    filename: '[name].js',
    path: path.resolve('dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']   // 对应关系,index.js对应的是index.html
    }),
    new HtmlWebpackPlugin({
      template: './src/login.html',
      filename: 'login.html',
      chunks: ['login']   // 对应关系,login.js对应的是login.html
    })
  ]
}
