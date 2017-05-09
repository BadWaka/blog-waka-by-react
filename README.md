# blog-waka-by-react
waka的个人博客 by react

# 自行配置webpack babel react

# 依赖
```
  "devDependencies": {
  "awesome-typescript-loader": "^3.1.3",    // awesome-typescript-loader可以让Webpack使用TypeScript的标准配置文件 tsconfig.json编译TypeScript代码
    "babel-core": "^6.24.1",    // babel核心
    "babel-loader": "^7.0.0",   // babel loader
    "babel-plugin-import": "^1.1.1",    // 用来进行按需加载
    "babel-preset-env": "^1.4.0",   // 根据环境的babel-env
    "babel-preset-es2015": "^6.24.1",   // 完整的es6
    "babel-preset-react": "^6.24.1",    // 解释JSX语法
    "babel-preset-stage-0": "^6.24.1",  // 法力无边的stage-0
    "css-loader": "^0.28.1",    // css-loader 是将 css 装载到 javascript
    "file-loader": "^0.11.1",   // 加载文件资源
    "node-sass": "^4.5.2",  // sass-loader依赖
    "sass-loader": "^6.0.3",    // 将scss编译为css
    "source-map-loader": "^0.2.1",  // source-map-loader使用TypeScript输出的sourcemap文件来告诉webpack何时生成 自己的sourcemaps。 这就允许你在调试最终生成的文件时就好像在调试TypeScript源码一样。
    "style-loader": "^0.17.0",  // style-loader 是让 javascript 认识css
    "ts-loader": "^2.0.3",  // 编译TypeScript
    "typescript": "^2.3.2", // TypeScript
    "url-loader": "^0.5.8", // 加载文件资源，并转化成base64url，如果小于限制大小则使用file-loader
    "webpack": "^2.4.1",    // webpack
    "webpack-dev-server": "^2.4.5"  // webpack开发服务器
  },
  "dependencies": {
    "@types/react": "^15.0.24", // React声明文件 TypeScript要用
    "@types/react-dom": "^15.5.0",  // ReactDOM声明文件 TypeScript要用
    "prop-types": "^15.5.8",    // PropTypes校验
    "react": "^15.5.4", // react
    "react-dom": "^15.5.4"  // react-dom,
    "react-slick": "^0.14.11",  // 轮播图
    "slick-carousel": "^1.6.0", // react-slick 轮播图组件的样式
  }
```
