import * as types from './actionTypes'

export const fetchHistoryAction = () => ({
  type: types.FETCH_HISTORY_REQUEST
})

export const fetchHistoryActionSuccess = (data) => ({
  type: types.FETCH_HISTORY_SUCESS,
  payload: data
})

export const fetchHistoryActionFailure = (data) => ({
  type: types.FETCH_HISTORY_FAILURE,
  payload: data
})
