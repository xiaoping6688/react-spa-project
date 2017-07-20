/**
 * 启动入口
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './stores'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './assets/styles/index.css'

// 解决移动端300毫秒点击延迟
var FastClick = require('fastclick')
FastClick.attach(document.body)

// ES6 Promise 兼容polyfill
// if (!window.Promise) {
//   require('es6-promise').polyfill()
// }
// @see config/polyfill.js

// 根节点
const Root = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'))
registerServiceWorker() // service-worker.js由webpack自动生成
