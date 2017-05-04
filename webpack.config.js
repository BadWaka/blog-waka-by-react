/**
 * Created by BadWaka on 03/05/2017.
 */
const path = require('path');

module.exports = {
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    // 模块
    module: {
        // 配置模块规则
        rules: [
            // ES6
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            // CSS
            {
                test: /\.css$/,
                use: {
                    loader: 'css-loader',
                }
            },
            // TypeScript
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                }
            }
        ]
    },
    // 插件
    plugins: [],
    // 开发工具
    devtool: 'cheap-eval-source-map',
    // dev server
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        port: 8080
    }
};