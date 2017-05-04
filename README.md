# blog-waka-by-react
waka的个人博客 by react

# 自行配置webpack babel react

# 依赖
```
  "devDependencies": {
    "babel-core": "^6.24.1",
    "babel-loader": "^7.0.0",
    "babel-preset-env": "^1.4.0",   // 根据环境的babel-env
    "babel-preset-es2015": "^6.24.1",   // 完整的es6
    "babel-preset-react": "^6.24.1",    // 解释JSX语法
    "babel-preset-stage-0": "^6.24.1",  // 法力无边的stage-0
    "css-loader": "^0.28.1",    // css-loader 是将 css 装载到 javascript
    "file-loader": "^0.11.1",   // 加载文件资源
    "node-sass": "^4.5.2",  // sass-loader依赖
    "sass-loader": "^6.0.3",    // 将scss编译为css
    "style-loader": "^0.17.0",  // style-loader 是让 javascript 认识css
    "ts-loader": "^2.0.3",  // 编译TypeScript
    "url-loader": "^0.5.8", // 加载文件资源，并转化成base64url，如果小于限制大小则使用file-loader
    "webpack": "^2.4.1",
    "webpack-dev-server": "^2.4.5"
  },
  "dependencies": {
    "prop-types": "^15.5.8",
    "react": "^15.5.4",
    "react-dom": "^15.5.4"
  }
```
