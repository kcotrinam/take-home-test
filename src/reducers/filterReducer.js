import * as types from '../actions/actionTypes'

const filterCommitsReducer = (state = 0, action) => {
  switch (action.type) {
    case types.UPDATE_FILTER:
      return action.payload
    default:
      return state
  }
}

export default filterCommitsReducer
