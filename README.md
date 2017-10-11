## package.json
- npm init -y
## setup dependents
- yarn add webpack  webpack-dev-server html-webpack-plugin --dev
- yarn add react react-router-dom react-redux redux react-dom
- yarn add express mongoose
- yarn add babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader file-loader less less-loader style-loader url-loader --dev
## webpack
## .babelrc
```
{
  "presets": ["es2015","stage-0","react"]
}
```
## router
1.路由
/ 左边导航栏，右边展示目录的文章 =>最简单的，就是点击文章名，根据文章的id值从数据库中查找，返回的结果在右侧展示
2.左侧展示文章列表
- 发出一个action，从后台获取文章数据
异步请求获取数据，使用redux-thunk中间件
- 使用reducer，改变store的状态，更新文章数据
- 组件通过属性获取store里的文章数据，渲染出来
