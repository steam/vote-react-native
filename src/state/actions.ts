import { PollingLocation } from './types'

enum ActionTypes {
  FailLoadingPollingLocations = 'app/Vote/FailLoadingPollingLocations',
  FinishLoadingPollingLocations = 'app/Vote/FinishLoadingPollingLocations',
  StartLoadingPollingLocations = 'app/Vote/StartLoadingPollingLocations',
}

interface FailLoadingPollingLocations {
  type: ActionTypes.FailLoadingPollingLocations
  payload: {
    error: Error
  }
}

interface FinishLoadingPollingLocations {
  type: ActionTypes.FinishLoadingPollingLocations
  payload: {
    pollingLocations: PollingLocation[]
  }
}

interface StartLoadingPollingLocations {
  type: ActionTypes.StartLoadingPollingLocations
  payload: {
    address: string
  }
}

type Actions =
  | StartLoadingPollingLocations
  | FinishLoadingPollingLocations
  | FailLoadingPollingLocations

export { Actions, ActionTypes }
