import React, { FC, useEffect } from 'react'
import { FlatList, ListRenderItem, StyleSheet } from 'react-native'
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
  const { pollingLocations } = useCivicInfoState()
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

  return (
    <FlatList
      data={pollingLocations}
      keyExtractor={keyExtractor}
      renderItem={renderLocation}
      scrollEnabled={true}
      style={styles.list}
      testID="location-list"
    />
  )
}

const styles = StyleSheet.create({
  list: { backgroundColor: colors.uiLight, flex: 1, padding: 25 },
})

export { LocationsScreen }
