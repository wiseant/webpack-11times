let path = require('path');
// 插件都是一个类，所以我们命名的时候尽量用大写开头
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    // 添加hash可以防止文件缓存，每次都会生成4位的hash串
    filename: 'bundle.[hash:4].js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          // 将css用link的方式引入就不再需要style-loader了
          use: 'css-loader'
        })
      },
      //打包CSS样式中背景图
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader",
        options: {
          limit: 8192, //limit参数，代表如果图片文件小于指定字节数则自动压缩成base64编码的图片,否则拷贝文件到生产目录
          name: '[name].[hash:4].[ext]', //打包生成文件名的规则
          outputPath: 'images/',   //图片打包后存放的目录，相对于dist目录的路径
          publicPath: '../images' //非常重要！ 如果不指定此参数，则css样式中引用的图片路径都会基于css文件所在的目录
        }
      }
    ]
  },
  plugins: [
    // 通过new一下这个类来使用插件
    new HtmlWebpackPlugin({
      // 用哪个html作为模板
      // 在src目录下创建一个index.html页面当做模板来用
      template: './src/index.html',
      hash: true, // 会在打包好的bundle.js后面加上hash串
    }),
    // 打包时会把css文件放到dist目录下的css/style.css
    new ExtractTextWebpackPlugin('css/style.css')
  ]
}
