## 依赖技术
- webpack
- babel
- eslint 语法检查
- npm scripts 同意的任务构建
- react 组件化的基础类库
- mocha
- karma
## 如何开发
```
npm install 安装依赖文件
npm run build 开始跑
```
#webpack+babel
```
npm install babel-loader babel-core
```
- 模板插件 htmlWebpackPlugin 生成html文件 并且可以把配置的内容写入文件而且把js文件自动引入
- webpack-dev-server 微node服务器在package.json中配置，还可以再配置文件中配置  webpack-dev-server --progress --colors --port 8080 --content-base dist --hot
## karma

## mocha


## 配置多个less css方式
- let extractCss = new ExtractTextPlugin('stylesheets/[name].css');
- let extractLess = new ExtractTextPlugin('stylesheets/[name].less');

## hash文件指纹
- hash