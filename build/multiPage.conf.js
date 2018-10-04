/**
 * 这里没有严格配置，像小程序那样
 * 一个文件夹一个html,并且入口文件的命名相同
 */
const htmlWebpackPlugin = require('html-webpack-plugin')
const path=require('path')
const util=require('./utils')

const multiPagePath=path.join(util.rootPath,'./src/components/view')

module.exports = {
    entry: {
        test: path.join(multiPagePath, './test/test.js'),
        discover: path.join(multiPagePath, './discover/index.js'),
        essaydetail: path.join(multiPagePath, './essaydetail/index.js')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(multiPagePath, './test/test.html'),
            filename: 'test.html',
            chunks: ['test']
        }),
        new htmlWebpackPlugin({
            template: path.join(multiPagePath, './discover/discover.html'),
            filename: 'discover.html',
            chunks: ['discover']
        }),
        new htmlWebpackPlugin({
            template: path.join(multiPagePath, './essaydetail/essaydetail.html'),
            filename: 'essaydetail.html',
            chunks: ['essaydetail']
        })
    ]
}