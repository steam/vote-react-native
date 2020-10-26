import React, { FC } from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { Route, ScreenNavigatorParamList } from '../types'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/types'
import { useCivicInfoState } from '../../state'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Icon from 'react-native-vector-icons/EvilIcons'
import { Button } from '../../shared/buttons/Button'
import { colors } from '../../shared/style'
import { en } from '../../shared/i18n'
import { useTranslation } from 'react-i18next'

type LocationScreenRouteProp = RouteProp<ScreenNavigatorParamList, Route.LOCATION>

type LocationScreenNavigationProp = NativeStackNavigationProp<
  ScreenNavigatorParamList,
  Route.LOCATION
>

type Props = {
  navigation: LocationScreenNavigationProp
  route: LocationScreenRouteProp
}

const LocationScreen: FC<Props> = ({ navigation, route }) => {
  const { t } = useTranslation()
  const { selectors } = useCivicInfoState()
  const location = selectors.location(route.params.name)
  const address = location?.address
  const hours = location?.pollingHours
  const latitude = location?.latitude
  const longitude = location?.longitude
  const sources = location?.sources

  const onClose = () => {
    navigation.goBack()
  }

  const onDirectionsPress = async () => {
    Linking.openURL(`https://maps.google.com/?daddr=${latitude},${longitude}`)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onClose}
        style={styles.iconContainer}
      >
        <Icon color="#fff" name="close" size={40} style={styles.icon} />
      </TouchableOpacity>
      {latitude !== undefined && longitude !== undefined ? (
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            region={{
              latitude,
              longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
            style={styles.map}
          >
            <Marker
              coordinate={{
                latitude,
                longitude,
              }}
              key={1}
              pinColor={colors.pin}
            />
          </MapView>
        </View>
      ) : null}
      <View style={styles.text}>
        <Text style={styles.title}>{address?.locationName}</Text>
        <Text style={styles.address}>{address?.line1}</Text>
        <Text
          style={styles.address}
        >{`${address?.city}, ${address?.state}, ${address?.zip}`}</Text>
        {hours !== undefined ? (
          <Text style={styles.address}>
            {t(en.hours)}: {hours}
          </Text>
        ) : null}

        {latitude !== undefined && longitude !== undefined ? (
          <Button onPress={onDirectionsPress} title={t(en.getDirections)} />
        ) : null}
        {sources !== undefined
          ? sources.map(source => (
              <Text key={source.name} style={styles.source}>
                {t(en.source)}: {source.name}
              </Text>
            ))
          : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  address: { color: colors.uiMedium, fontSize: 15, paddingBottom: 3 },
  container: { backgroundColor: colors.uiLight, flex: 1 },
  icon: { alignSelf: 'center' },
  iconContainer: {
    backgroundColor: colors.uiMediumAlpha80,
    borderRadius: 25,
    height: 45,
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    top: 20,
    width: 45,
    zIndex: 1000,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapContainer: {
    alignItems: 'center',
    height: 300,
    width: '100%',
  },
  source: {
    color: colors.uiMedium,
    fontSize: 12,
    paddingBottom: 3,
    textAlign: 'center',
  },
  text: { flexGrow: 1, padding: 25 },
  title: { fontSize: 25, paddingBottom: 8 },
})

export { LocationScreen }
