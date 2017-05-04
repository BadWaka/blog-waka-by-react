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
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings; style-loader 是让 javascript 认识css
                }, {
                    loader: 'css-loader?modules', // 在css-loader后面加上参数modules，表示打开CSS Modules功能
                }]
            },
            // SCSS
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings; style-loader 是让 javascript 认识css
                }, {
                    loader: "css-loader?modules" // translates CSS into CommonJS; css-loader 是将 css 装载到 javascript
                }, {
                    loader: "sass-loader" // compiles Sass to CSS; sass-loader 是将sass文件编译成css
                }]
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
    devtool: 'eval',
    // dev server
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        port: 8080
    }
};