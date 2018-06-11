const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
let rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  },
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
  }
]
module.exports = [
  {
    name: 'dist',
    mode: 'production',
    entry: './src/index.js',
    output: {
      library: 'UserList',
      libraryTarget: 'umd',
      libraryExport: 'default',
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js'
    },
    module: {
      rules: rules
    },
    plugins: [
      new uglifyJsPlugin(),
      new HTMLWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'home.html')
      })
    ]
  },
  {
    name: 'demo',
    mode: 'production',
    entry: './src/index.js',
    output: {
      library: 'UserList',
      libraryTarget: 'umd',
      libraryExport: 'default',
      path: path.resolve(__dirname, 'demo'),
      filename: 'demo.js'
    },
    module: {
      rules: rules
    },
    plugins: [
      new uglifyJsPlugin(),
      new HTMLWebpackPlugin({
        filename: 'demo.html',
        template: path.resolve(__dirname, 'home.html')
      })
    ]
  }
]
