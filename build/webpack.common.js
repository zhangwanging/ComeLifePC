const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
//vue-loader 15版本以上需要配置
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const util = require('utils')

const multiPageConf = require('multiPage.conf');

module.exports = {
    entry: {
        index: ["babel-polyfill", "./src/main.js"]
    },
    output: {
        path: path.join(util.rootPath, './dist'),
        filename: '[name].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(util.rootPath, './src/index.html'),
            filename: 'index.html',
            chunks: ['index']
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: ['./src/style/common.scss','./src/style/response.scss']
                            }
                        }
                    ]
            },
            {
                test: /\.(ico|jpg|png|gif|bmp|jpeg)$/,
                use: [
                    {
                        loader:'url-loader',
                        options:{
                            limit:10240
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            $src: path.resolve(util.rootPath, 'src'),
        }
    }
};