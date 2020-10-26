import { State } from './types'
import { Actions, ActionTypes } from './actions'

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.FailLoadingPollingLocations: {
      return { ...state, error: action.payload.error, status: 'error' }
    }
    case ActionTypes.FinishLoadingPollingLocations: {
      return {
        ...state,
        pollingLocations: action.payload.pollingLocations,
        status: 'finished',
      }
    }
    case ActionTypes.StartLoadingPollingLocations: {
      return { ...state, status: 'loading' }
    }
  }
  return state
}

export { reducer }
