const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
module.exports = {
    entry: [
        "./script.js",
        //"./index.html",
        //"./sw.js"
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        //new HtmlWebpackPlugin({template: "./index.html"}),
        //new ServiceWorkerWebpackPlugin({template: "./sw.js"})
    ],
    devServer: {
        contentBase: "./dist",
    },
};