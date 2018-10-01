const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const dotenv = require('dotenv').config({path: __dirname + '/.env'})
const config = require('./web/src/config')

module.exports = {
    mode: dotenv.parsed.ENVIRONMENT == 'prod' ? 'production' : 'development',
    entry: './web/src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: dotenv.parsed.PATH_VUE_PUBLIC
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('web/src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-2']
                        }
                    }
                ],
                include: [ 
                    path.resolve(__dirname, 'web/src'),
                    require.resolve('bootstrap-vue'),
                ],
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/',
                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.parsed),
            globalConfig: JSON.stringify(config),
            paws: 'new (require(\'' + path.resolve(__dirname, './web/src/lib/paws') + '\'))',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './web/src/index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new VueLoaderPlugin(),
    ]
};