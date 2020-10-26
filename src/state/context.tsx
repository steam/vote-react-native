import React, { createContext, Dispatch, FC, ReactNode, useReducer } from 'react'
import { State } from './types'
import { Actions } from './actions'
import { reducer } from './reducer'

interface CivicInfoProviderProps {
  initialState?: State
  children: ReactNode
}

const getInitialState = (): State => ({
  error: undefined,
  status: 'finished',
  pollingLocations: [],
})

const CivicInfoContext = createContext<State | undefined>(undefined)
const CivicInfoDispatchContext = createContext<Dispatch<Actions> | undefined>(undefined)

const CivicInfoProvider: FC<CivicInfoProviderProps> = ({
  initialState = getInitialState(),
  ...rest
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CivicInfoContext.Provider value={state}>
      <CivicInfoDispatchContext.Provider value={dispatch}>
        {rest.children}
      </CivicInfoDispatchContext.Provider>
    </CivicInfoContext.Provider>
  )
}

export { CivicInfoProvider, CivicInfoContext, CivicInfoDispatchContext }
