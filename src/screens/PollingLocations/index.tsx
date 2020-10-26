import React, { FC, useEffect } from 'react'
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { Route, ScreenNavigatorParamList } from '../types'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/types'
import { loadPollingPlaces, useCivicInfoDispatch, useCivicInfoState } from '../../state'
import { PollingLocation } from '../../state/types'
import { Row } from './Row'
import { colors } from '../../shared/style'

type LocationsScreenRouteProp = RouteProp<
  ScreenNavigatorParamList,
  Route.POLLING_LOCATIONS
>

type LocationsScreenNavigationProp = NativeStackNavigationProp<
  ScreenNavigatorParamList,
  Route.POLLING_LOCATIONS
>

type Props = {
  navigation: LocationsScreenNavigationProp
  route: LocationsScreenRouteProp
}

const LocationsScreen: FC<Props> = ({ navigation, route }) => {
  const { dispatch } = useCivicInfoDispatch()
  const { pollingLocations, status } = useCivicInfoState()
  useEffect(() => {
    const load = async () => {
      loadPollingPlaces(dispatch, route.params.address)
    }
    load()
  }, [dispatch, route.params.address])

  const keyExtractor = (pollingLocation: PollingLocation, index: number) => {
    return `${index}`
  }

  const renderLocation: ListRenderItem<PollingLocation> = ({ item }) => {
    const onPress = () => {
      navigation.navigate(Route.LOCATION, { name: item.address?.locationName })
    }
    return <Row location={item} onPress={onPress} />
  }

  const showList = status === 'finished' && pollingLocations.length > 0
  const showZeroResults = status === 'finished' && pollingLocations.length === 0
  return (
    <>
      {status === 'loading' ? <ActivityIndicator size="large" /> : null}
      {status === 'error' ? (
        <View style={styles.errorContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : null}
      {showZeroResults ? (
        <View style={styles.errorContainer}>
          <Text style={styles.noResults}>
            No polling locations found, please try another address.
          </Text>
        </View>
      ) : null}
      {showList ? (
        <FlatList
          data={pollingLocations}
          keyExtractor={keyExtractor}
          renderItem={renderLocation}
          scrollEnabled={true}
          style={styles.list}
          testID="location-list"
        />
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: colors.uiLight,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  list: { backgroundColor: colors.uiLight, flex: 1, padding: 25 },
  noResults: { color: colors.uiMedium, fontSize: 20, textAlign: 'center' },
})

export { LocationsScreen }
