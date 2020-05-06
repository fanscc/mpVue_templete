# my-project

> A Mpvue project

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm run dev --env=uat --otp=wx

env后面接代理地址,otp后面接平台 微信、百度、头条、支付宝/wx, swan, tt, my

env没有赋值的时候选择代理本地地址,opt没有赋值的时候默认wx

当直接输入npm run dev时候代表需要代理局域网内的后台地址跟平台是微信

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```
"mpvue-loader": "2.0.1"

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
