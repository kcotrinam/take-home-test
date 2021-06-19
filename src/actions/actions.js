import * as types from './actionTypes'

export const fetchHistoryAction = () => ({
  type: types.FETCH_HISTORY_REQUEST
})

export const fetchHistoryActionSuccess = (data) => ({
  tyupe: types.FETCH_HISTORY_SUCESS,
  payload: data
})

export const fetchHistoryActionFailure = (data) => ({
  tyupe: types.FETCH_HISTORY_FAILURE,
  payload: data
})
