/**
 * 页面UI状态
 */

import { fromJS } from 'immutable'

import * as types from '../constants/actionTypes'
import { TRANSITION_FADE } from '../constants/config'
import { createReducer } from '../../utils/util'

const initState = fromJS({
  transitionName: TRANSITION_FADE
})

function setPageTransition (state, action) {
  return state.set('transitionName', action.payload)
}

export default createReducer(initState, {
  [types.SET_PAGE_TRANSITION]: setPageTransition
})
