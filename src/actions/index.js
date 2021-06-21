import fetchHistory from '../services/fetchHistory'
import * as actions from './actions'

const requestHistory = () => async (dispatch) => {
  dispatch(actions.fetchHistoryAction)

  try {
    const history = await fetchHistory()

    dispatch(actions.fetchHistoryActionSuccess(history))
  } catch (error) {
    dispatch(actions.fetchHistoryActionFailure(error))
  }
}

export default requestHistory
