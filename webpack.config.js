const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'main.js', // 编译输出js文件名
    path: path.resolve(__dirname, 'dist'), // 编译输出js路径
    clean: true // 构建前清理dist目录
  },
  mode: 'development',
  target: 'node', // node环境编译，electron内部为node环境
  resolve: {
    extensions: ['.js', '.jsx'], // 自动拾取后缀
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] // css转化loader
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // react转化loader
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    // html输出插件
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'), // html模版文件
      hash: true // js文件添加随机字符串
    })
  ]
};