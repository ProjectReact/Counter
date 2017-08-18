const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");         // 给index.html文件自动加上编译的js文件路径
const OpenBrowserPlugin = require('open-browser-webpack-plugin'); // 浏览器自动打开
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // style标签外联
module.exports = {
    entry:path.join(__dirname, "./src/app.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle[hash:6].js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test:/\.css?$/,
                use: ["style-loader", "css-loader"]                
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]                
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]                
            }       
        ]
    },
    plugins:[
        // 给index.html文件自动加上编译的js文件路径
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html")
        }),
        // 浏览器自动打开
        new OpenBrowserPlugin({ 
            url: 'http://localhost:8080' 
        }),
        new ExtractTextPlugin({
            filename: 'index.css',
            disable: false,
            allChunks: true,
        })
    ],
    devServer: {
        contentBase: path.join(__dirname,"dist"),
        inline: true
    }

}