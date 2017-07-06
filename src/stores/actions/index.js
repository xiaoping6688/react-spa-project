/*
 * action 创建函数
 */

import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'

export const setPageTransition = createAction(types.SET_PAGE_TRANSITION)
export const setAuthSuccess = createAction(types.SET_AUTH_SUCCESS)

// 异步action
/*export function loadPosts (userId) {
  return {
    // 要在之前和之后发送的 action types
    types: ['LOAD_POSTS_REQUEST', 'LOAD_POSTS_SUCCESS', 'LOAD_POSTS_FAILURE'],
    // 检查缓存 (可选):
    shouldCallAPI: state => !state.users[userId],
    // 进行取：
    callAPI: () => fetch(`http://myapi.com/users/${userId}/posts`),
    // 在 actions 的开始和结束注入的参数
    payload: { userId }
  }
}*/
