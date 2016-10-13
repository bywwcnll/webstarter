/**
 * Created by Gaven on 2016/9/12.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./app/index.js']
    },
    output: {
        path: 'build',
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
                    presets: ['es2015','react','stage-0']
                }
            },
            {
                test: /\.s?css$/,
                loader: 'style!css!postcss'
            }
        ]
    },
    postcss: function () {
        return [
            // require('autoprefixer'),
            // require('cssnano'),
            require('postcss-cssnext'),
            require('postcss-plugin-px2rem'),
        ];
    },
    plugins: [
        // https://webpack.github.io/docs/list-of-plugins.html
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = module.exports.plugins.concat(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );

}