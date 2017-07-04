/**
 * 配置Store
 */

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import callAPIActionMiddleware from './middlewares/callAPIAction'
import crashReporterMiddleware from './middlewares/crashReporter'

const middlewares = [ thunkMiddleware, callAPIActionMiddleware ]

let enhancer

// Redux DevTools Extension
if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  let loggerMiddleware = require('./middlewares/logger').default
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(
      ...middlewares,
      loggerMiddleware
    )
  )
} else {
  if (process.env.NODE_ENV !== 'production') {
    let loggerMiddleware = require('./middlewares/logger').default
    enhancer = compose(
      applyMiddleware(...middlewares, loggerMiddleware)
    )
  } else { // 生产环境
    enhancer = compose(
      applyMiddleware(...middlewares, crashReporterMiddleware)
    )
  }
}

// Create Store
const store = createStore(
  reducers,
  enhancer
)

// Enable Webpack hot module replacement for reducers
if (module.hot) {
  module.hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers').default)
  )
}

export default store
