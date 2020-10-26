import { useContext } from 'react'
import { ActionTypes } from './actions'
import { CivicInfoContext, CivicInfoDispatchContext } from './context'
import { selectors } from './selectors'

const useCivicInfoState = () => {
  const state = useContext(CivicInfoContext)

  if (state === undefined) {
    throw new Error('useCivicInfoState must be used within a CivicInfoProvider')
  }

  return { ...state, selectors: selectors(state) }
}

const useCivicInfoDispatch = () => {
  const dispatch = useContext(CivicInfoDispatchContext)

  if (dispatch === undefined) {
    throw new Error('useCivicInfoDispatch must be used within a CivicInfoProvider')
  }

  return {
    dispatch,
    actions: {
      ...ActionTypes,
    },
  }
}

export { useCivicInfoDispatch, useCivicInfoState }
