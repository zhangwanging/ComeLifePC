const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
//vue-loader 15版本以上需要配置
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const util = require('./utils')

const multiPageConf = require('./multiPage.conf')

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
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, // 处理 CSS 文件的 loader
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']}, // 处理 less 文件的 loader
            {
                test: /\.scss$/, use:
                    [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                        {
                            //全局导入*.scss,方便任意处调用变量
                            loader: 'sass-resources-loader',
                            options: {
                                resources: ['./src/style/common.scss','./src/style/response.scss']
                            }
                        }
                    ]
            },
            {test: /\.(ico|jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},
            // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.vue$/, use: 'vue-loader'} // 处理 .vue 文件的 loader
        ]
    },
    resolve: {
        alias: {
            $src: path.resolve(util.rootPath, 'src'),
        }
    }
};