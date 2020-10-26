import { PollingLocation, State } from './types'

const selectors = (state: State) => {
  const location = (name: string): PollingLocation | undefined => {
    return state.pollingLocations.find(l => l.address?.locationName === name)
  }
  return { location }
}

export { selectors }
