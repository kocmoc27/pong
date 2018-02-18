const path = require('path');

module.exports = {
    entry: './src/index',

    output: {
        path: path.resolve(__dirname,'public/js'),
        filename:'app.js',
        publicPath: '/js'
    },

    devServer: {
        contentBase: path.join(__dirname,'public/js'),
    },

    devtool: 'cheap-eval-source-map'
};