var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;
var extractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                loader:'style!css',
                include:path.resolve(__dirname,'src')
            },
            {
                test:/\.less/,
                loader:'style!css!less',
                include:path.resolve(__dirname,'src')
            }
        ]
    },
    plugins:[
      new htmlWebpackPlugin({
          title:'搭建前端工作流',
          template:'./src/index.html'
      }),
        new uglifyPlugin({
            compress:false
        }),
        new webpack.BannerPlugin('author:wangchen \n date:2016-12-15')
    ]


}


module.exports = config;