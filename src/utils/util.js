/**
 * 工具类、实用函数
 */

/**
 * 获取url的查询对象，必须包含‘?’
 * @param url 可选，默认为当前location地址
 */
export function getUrlQuery (url) {
  url = url || window.location.href
  let query = {}

  if (typeof url === 'string' && url.length) {
    url = url.indexOf('?') > -1 ? url.replace(/\S*\?/, '') : ''

    let params = url.split('&')
    let length = params.length

    for (let i = 0; i < length; i++) {
      let param = params[i].replace(/#\S+/g, '').split('=')
      query[decodeURIComponent(param[0])] = decodeURIComponent(param[1]) || ''
    }
  }

  return query
}

/**
 * 根据范围获取随机数
 */
export function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 根据某一项值获取当前项所在数组索引，-1说明未查到
 */
export function indexOfArray (key, value, target) {
  // for (let index in target) {
  //   let item = target[index]
  //   if (item[key] == value) {
  //     return parseInt(index)
  //   }
  // }

  // return -1

  return target.findIndex(item => item[key] === value)
}

/**
 * 根据某一项值获取当前项数据
 */
export function getInArray (key, value, target) {
  // for (let index in target) {
  //   let item = target[index]
  //   if (item[key] == value) {
  //     return item;
  //   }
  // }

  // return null

  return target.find(item => item[key] === value)
}

/**
 * 将ascii字符串或二进制数据转换成一个base64编码过的字符串（IE10+）
 */
export function utf8ToBase64 (str) {
  return window.btoa(unescape(encodeURIComponent(str)))
}

/**
 * 将base64解码utf8
 */
export function base64ToUtf8 (str) {
  return decodeURIComponent(escape(window.atob(str)))
}

/**
 * Action Creators 生成器
 * @param type Action类型
 * @param argNames 任意个数参数名称
 * @return {Function}
 */
export function makeActionCreator (type, ...argNames) {
  return function (...args) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

/**
 * Reducers 生成器，将 reducers 表达为 action types 到 handlers 的映射对象
 * @param initialState 初始状态数据
 * @param handlers reducer映射对象，如：{ actionType: handler }
 * @return {Function}
 */
export function createReducer (initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

/**
 * 更新store#state
 * @param oldObject 原state对象
 * @param newValues 要更新的值对象，如 { completed: true }
 * @return {Object} 更新后的新state对象
 */
export function updateObject (oldObject, newValues) {
  // 将空对象作为第一个参数传递给 Object.assign，以确保只是复制数据，而不是去改变数据
  return Object.assign({}, oldObject, newValues)
}

/**
 * 更新store#state指定的数组对象
 * @param array 原state数组
 * @param itemId 要更新的对象ID
 * @param updateItemCallback 更新处理函数，如 item => updateObject(item, { completed: !item.completed })
 * @return {Array} 更新后的新state数组对象
 */
export function updateItemInArray (array, itemId, updateItemCallback) {
  const updatedItems = array.map(item => {
    if(item.id !== itemId) { // 只想更新一个项目，所以保留所有的其他项
      return item
    }

    // 使用提供的回调来创建新的项目
    const updatedItem = updateItemCallback(item)
    return updatedItem
  })

  return updatedItems
}
