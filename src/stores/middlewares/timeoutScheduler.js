/**
 * 用 { meta: { delay: N } } 来让 action 延迟 N 毫秒。
 * 在这个案例中，让 `dispatch` 返回一个取消 timeout 的函数。
 */
const timeoutScheduler = store => next => action => {
  if (!action.meta || !action.meta.delay) {
    return next(action)
  }

  let timeoutId = setTimeout(
    () => next(action),
    action.meta.delay
  )

  return function cancel() {
    clearTimeout(timeoutId)
  }
}

export default timeoutScheduler
