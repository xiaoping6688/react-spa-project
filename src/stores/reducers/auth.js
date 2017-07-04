/**
 * 认证状态
 */

import { fromJS } from 'immutable'

import * as types from '../constants/actionTypes'
import { createReducer } from '../../utils/util'

const initState = fromJS({
  isAuthenticated: true // FIXME for test
})

function setAuthSuccess (state, action) {
  return state.set('isAuthenticated', true)
}

export default createReducer(initState, {
  [types.SET_AUTH_SUCCESS]: setAuthSuccess
})
