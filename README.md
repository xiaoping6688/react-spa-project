# react-spa-project
基于 react.js 技术栈构建的纯前端SPA项目框架.

**技术栈**

- react.js（v15.6）
- redux react-redux redux-trunk（状态管理，异步action推荐使用redux-saga会更优雅些）
- react-router4（前端路由，组件异步加载、认证、过渡等）
- immutable（优化、提升性能）
- fetch（网络请求封装）
- styled-components（css in js 方案，语法高亮请使用[styled-babel-sublime](https://github.com/garetmckinley/styled-babel-sublime)）
- antd（基于react的UI组件库[Ant Design Mobile](https://mobile.ant.design/index-cn)）
- PWA (渐进式Web应用)
- Webpack（工程化、自动构建）
- [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension)（支持Redux调试插件，非侵入式）

> * 如果需要实现组件动画效果，推荐使用：[Ant Motion](https://motion.ant.design) 
> * 如果需要服务端渲染(SSR)，推荐使用：[NEXT](https://github.com/zeit/next.js) 
> * 如果需要显示页面加载进度，推荐使用：[PACE](http://github.hubspot.com/pace/docs/welcome) 
> * 如果需要日志收集、异常报告服务，推荐使用：[Sentry](https://sentry.io) 
> * 组织State中的范式化数据，可使用库：[normalizr](https://github.com/paularmstrong/normalizr)

较新的学习文档
> - [React Router4](https://reacttraining.com/react-router/web/example/basic)
> - [Redux 中文文档](http://cn.redux.js.org/index.html)
> - [React 官方文档](https://facebook.github.io/react/docs/hello-world.html)

注：UI尺寸直接使用以750为基准的px(自动转rem)，参见[antd mobile「高清」方案设置](https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE) <br/>

**如果你chrome安装了[Egret Inspector]（一款H5游戏引擎的调试插件），它可能会和[react-redux]冲突！[原因](http://react-china.org/t/react-redux-connect-chrome/13365)**

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm start

# build for production with minification
npm run build
```
