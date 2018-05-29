const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './src/index',
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(['app'])
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      }
    ]
  }
};

