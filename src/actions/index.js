import fetchHistory from '../services/fetchHistory'
import * as actions from './actions'
import * as types from './actionTypes'

const requestHistory = () => async (dispatch) => {
  dispatch(actions.fetchHistoryAction)

  try {
    const history = await fetchHistory()

    dispatch(actions.fetchHistoryActionSuccess(history))
  } catch (error) {
    dispatch(actions.fetchHistoryActionFailure(error))
  }
}

export const updateFilter = (days) => ({
  type: types.UPDATE_FILTER,
  payload: days
})

export default requestHistory
