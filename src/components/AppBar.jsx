import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import theme from '../theme'
import Constants from 'expo-constants'

export default function AppBar({ navigation }) {
  return (
    <View style={styles.container}>
        <Button
            fontWeight='bold' style={styles.text}
            title="Repositores"
            onPress={() => navigation.navigate('Repositories')}
        />
        <Button
            fontWeight='bold' style={styles.text}
            title="Sign in"
            onPress={() => navigation.navigate('Signin')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.AppBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: 'row'
    },
    text: {
        color: theme.AppBar.primaryText
    }
})