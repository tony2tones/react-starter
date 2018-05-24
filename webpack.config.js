var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app:'./src/index',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [{
            test:/\.js/ + /\.jsx?$/, 
            loader: 'babel-loader',
            include: path.join(__dirname, 'src'),
        }]
    }
}