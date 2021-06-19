import { combineReducers } from 'redux'
import historyReducer from './historyReducer'

const allReducers = combineReducers({
  history: historyReducer
})

export default allReducers
