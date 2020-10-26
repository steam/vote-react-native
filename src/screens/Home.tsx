import React, { FC, useState } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { Route, ScreenNavigatorParamList } from './types'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/types'
import { colors } from '../shared/style'
import { Button } from '../shared/buttons/Button'
import { useTranslation } from 'react-i18next'
import { en } from '../shared/i18n'

type HomeScreenRouteProp = RouteProp<ScreenNavigatorParamList, Route.HOME>

type HomeScreenNavigationProp = NativeStackNavigationProp<
  ScreenNavigatorParamList,
  Route.HOME
>

type Props = {
  navigation: HomeScreenNavigationProp
  route: HomeScreenRouteProp
}

const Home: FC<Props> = ({ navigation }) => {
  const { t } = useTranslation()

  // const [address, setAddress] = useState<string | undefined>(
  //   '10174 E. 59th Ave, Denver, CO 80238',
  // )
  const [address, setAddress] = useState<string | undefined>(undefined)
  const onPress = () => {
    if (address !== undefined) {
      navigation.navigate(Route.POLLING_LOCATIONS, { address })
    }
  }
  const onChangeAddress = (text: string) => {
    setAddress(text)
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <Image source={require('../images/logo_vote.png')} style={styles.logo} />
        <TextInput
          multiline={false}
          onChangeText={onChangeAddress}
          placeholder={t(en.addressPlaceholder)}
          placeholderTextColor={colors.uiMedium}
          style={styles.input}
          value={address}
        />
        <Button onPress={onPress} title={t(en.findPollingLocaions)} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.uiLight, flex: 1 },
  input: {
    borderBottomWidth: 1,
    fontSize: 18,
    height: 50,
    marginTop: 20,
    paddingVertical: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  logo: { alignSelf: 'center', height: 250, width: 250 },
  scrollView: {
    backgroundColor: colors.uiLight,
    margin: 20,
    paddingTop: 100,
  },
  title: { fontSize: 70, textAlign: 'center' },
})
export { Home }
