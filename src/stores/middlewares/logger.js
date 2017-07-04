/**
 * 记录所有被发起的 action 以及产生的新的 state。
 * @see redux-logger
 */
const logger = store => next => action => {
  console.group('%c action', 'color: gray; font-weight: lighter', action.type)
  console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', store.getState().toJS())
  console.log('%c action    ', 'color: #03A9F4; font-weight: bold', action)
  let result = next(action)
  console.log('%c next state', 'color: #4CAF50; font-weight: bold', store.getState().toJS())
  console.groupEnd()
  return result
}

export default logger
