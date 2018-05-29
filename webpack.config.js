const path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.js'),
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'
  },
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

