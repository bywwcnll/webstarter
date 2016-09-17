/**
 * Created by Gaven on 2016/9/12.
 */
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./app/index.js']
    },
    output: {
        path: 'build',
        // publicPath: '/build/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    postcss: function () {
        return [
            require('autoprefixer'),
            require('cssnano'),
            // require('postcss-pxtorem')
        ];
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     output: {
        //         comments: false
        //     }
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/index.html'
        })
    ]
};