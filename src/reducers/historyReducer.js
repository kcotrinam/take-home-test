import * as types from '../actions/actionTypes'
const INITIAL_STATE = {
  loading: false,
  history: [],
  error: null
}

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_HISTORY_REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.FETCH_HISTORY_SUCESS:
      return {
        ...state,
        loading: false,
        history: action.payload
      }
    case types.FETCH_HISTORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default historyReducer
