/*
 * action 创建函数
 */

import { createAction } from 'redux-actions'
import * as types from '../constants/actionTypes'

export const setPageTransition = createAction(types.SET_PAGE_TRANSITION)
export const setAuthSuccess = createAction(types.SET_AUTH_SUCCESS)
