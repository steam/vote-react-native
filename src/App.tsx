import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { Screens } from './screens/Screens'
import { initializeI18N } from './shared/i18n'

initializeI18N()
enableScreens()

declare const global: { HermesInternal: null | {} }

const App: FC = () => {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  )
}

export { App }
