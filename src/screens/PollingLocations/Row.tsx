import React, { FC } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { PollingLocation } from '../../state/types'
import Icon from 'react-native-vector-icons/EvilIcons'
import { colors } from '../../shared/style'

interface Props {
  onPress: () => void
  location: PollingLocation
}

const Row: FC<Props> = ({ location, onPress }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.3}
      onPress={onPress}
      underlayColor={colors.uiLight}
    >
      <View style={styles.row}>
        <View style={styles.text}>
          <Text style={styles.title}>{location.address?.locationName}</Text>
          <Text style={styles.address}>{location.address?.line1}</Text>
          <Text
            style={styles.address}
          >{`${location.address?.city}, ${location.address?.state}, ${location.address?.zip}`}</Text>
        </View>
        <View style={styles.icon}>
          <Icon color={colors.primary} name="arrow-right" size={30} />
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  address: { color: colors.uiMedium, fontSize: 15 },
  icon: { alignSelf: 'center' },
  row: {
    backgroundColor: colors.uiLight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingVertical: 10,
  },
  text: { alignSelf: 'flex-start' },
  title: { fontSize: 20 },
})

export { Row }
