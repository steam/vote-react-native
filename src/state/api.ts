import { Actions, ActionTypes } from './actions'
import { Dispatch } from 'react'

// this would not normally be inline here :)
const apiKey = 'AIzaSyChE0fr3l0LbtaR_IdeRg4EMOz9Pez4YR0'
const baseUrl = 'https://civicinfo.googleapis.com/civicinfo/v2/'
const voterInfoUrl = `${baseUrl}voterinfo?key=${apiKey}`

const loadPollingPlaces = async (dispatch: Dispatch<Actions>, address: string) => {
  dispatch({ type: ActionTypes.StartLoadingPollingLocations, payload: { address } })
  try {
    const voterInfo = await fetch(`${voterInfoUrl}&address=${address}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const json = await voterInfo.json()
    const pollingLocations = json.pollingLocations ?? []
    dispatch({
      type: ActionTypes.FinishLoadingPollingLocations,
      payload: { pollingLocations },
    })
  } catch (error) {
    dispatch({ type: ActionTypes.FailLoadingPollingLocations, payload: { error } })
  }
}

export { loadPollingPlaces }
