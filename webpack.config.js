let path = require('path');
// 插件都是一个类，所以我们命名的时候尽量用大写开头
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    // 添加hash可以防止文件缓存，每次都会生成4位的hash串
    filename: 'bundle.[hash:4].js',
    path: path.resolve('dist')
  },
  plugins: [
    // 通过new一下这个类来使用插件
    new HtmlWebpackPlugin({
      // 用哪个html作为模板
      // 在src目录下创建一个index.html页面当做模板来用
      template: './src/index.html',
      hash: true, // 会在打包好的bundle.js后面加上hash串
    })
  ]
}
