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

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'))
registerServiceWorker()
