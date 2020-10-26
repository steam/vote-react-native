import React, { FC } from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { Home } from './Home'
import { LocationsScreen } from './PollingLocations'
import { Route, ScreenNavigatorParamList } from './types'
import { CivicInfoProvider } from '../state'
import { LocationScreen } from './Location'
import { colors } from '../shared/style'
import { en } from '../shared/i18n'
import { useTranslation } from 'react-i18next'

const Stack = createNativeStackNavigator<ScreenNavigatorParamList>()

const Screens: FC = () => {
  const { t } = useTranslation()
  return (
    <CivicInfoProvider>
      <Stack.Navigator>
        <Stack.Screen
          component={Home}
          name={Route.HOME}
          options={{
            headerShown: false,
            stackPresentation: 'fullScreenModal',
            contentStyle: { backgroundColor: colors.uiLight },
          }}
        />
        <Stack.Screen
          component={LocationsScreen}
          name={Route.POLLING_LOCATIONS}
          options={{
            stackPresentation: 'push',
            title: t(en.pollingLocations),
            headerLargeTitle: true,
            headerShown: true,
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: colors.uiLight,
          }}
        />
        <Stack.Screen
          component={LocationScreen}
          name={Route.LOCATION}
          options={{ stackPresentation: 'formSheet', headerShown: false }}
        />
      </Stack.Navigator>
    </CivicInfoProvider>
  )
}

export { Screens }
