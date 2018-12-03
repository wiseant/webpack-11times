const path = require('path');

module.exports = {
  entry: './src/index.js',    // 入口文件
  output: {
    filename: 'bundle.js',      // 打包后的文件名称
    path: path.resolve('dist')  // 打包后的目录，必须是绝对路径
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: /src/,          // 只转化src目录下的js
        exclude: /node_modules/  // 排除掉node_modules，优化打包速度
      }
    ]
  }
}
