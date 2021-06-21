import { combineReducers } from 'redux'
import filterCommitsReducer from './filterReducer'
import historyReducer from './historyReducer'

const allReducers = combineReducers({
  history: historyReducer,
  filter: filterCommitsReducer
})

export default allReducers
