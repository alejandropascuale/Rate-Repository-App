import React from 'react'
import { View, StyleSheet } from 'react-native'
import SyledText from './StyledText'
import theme from '../theme'
import Constants from 'expo-constants'

export default function AppBar() {
  return (
    <View style={styles.container}>
        <SyledText fontWeight='bold' style={styles.text}>
            Repositories
        </SyledText>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.AppBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color: theme.AppBar.primaryText
    }
})