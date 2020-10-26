import React, { FC } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { colors } from '../style'

interface Props {
  onPress: () => void
  title: string
}

const Button: FC<Props> = ({ onPress, title }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.primaryMedium : colors.primary,
        },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: { borderRadius: 30, marginBottom: 20, marginTop: 35, padding: 10 },
  buttonText: { color: colors.uiLight, fontSize: 25, textAlign: 'center' },
})

export { Button }
