/**
 * 执行自定义异步Action，格式如下：
 * {
 *    // 要在之前和之后发送的 action types
 *    types: ['LOAD_REQUEST', 'LOAD_SUCCESS', 'LOAD_FAILURE'],
 *    // 检查缓存 (可选):
 *    shouldCallAPI: (state) => !state.users[userId],
 *    // 进行取：
 *    callAPI: () => fetch(`http://myapi.com/users/${userId}/posts`),
 *    // 在 actions 的开始和结束注入的参数
 *    payload: { userId }
 * }
 */
const callAPIAction = ({ dispatch, getState }) => next => action => {
  const {
    types,
    callAPI,
    shouldCallAPI = () => true,
    payload = {}
  } = action

  if (!types) {
    // Normal action: pass it on
    return next(action)
  }

  if (!Array.isArray(types) || types.length !== 3 || !types.every(type => typeof type === 'string')) {
    throw new Error('Expected an array of three string types.')
  }

  if (typeof callAPI !== 'function') {
    throw new Error('Expected callAPI to be a function.')
  }

  if (!shouldCallAPI(getState())) {
    return
  }

  const [ requestType, successType, failureType ] = types

  dispatch(Object.assign({}, payload, {
    type: requestType
  }))

  return callAPI().then(
    response => dispatch(Object.assign({}, payload, {
      response,
      type: successType
    })),
    error => dispatch(Object.assign({}, payload, {
      error,
      type: failureType
    }))
  )
}

export default callAPIAction
