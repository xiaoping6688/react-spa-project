/**
 * 使你除了 action 之外还可以发起 promise。
 * 如果这个 promise 被 resolved，他的结果将被作为 action 发起。
 * 这个 promise 会被 `dispatch` 返回，因此调用者可以处理 rejection。
 */
const vanillaPromise = store => next => action => {
  if (typeof action.then !== 'function') {
    return next(action)
  }

  return Promise.resolve(action).then(store.dispatch)
}

export default vanillaPromise
