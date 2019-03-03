const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const util = require('./utils.js');

module.exports = merge(common, {
    mode:'development',
    devtool: 'inline-source-map',
    devServer: {
        hot:true,
        inline:true,
        contentBase:path.join(util.rootPath, './dist')
    }
});