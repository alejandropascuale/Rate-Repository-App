import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';
import theme from '../theme'
import Constants from 'expo-constants'

export default function AppBar() {
  return (
    <View style={styles.container}>
        <Link to={{ screen: 'Repositories' }} fontWeight='bold' style={styles.text}>
            Repositories
        </Link>
        <Link to={{ screen: 'Sign in' }} fontWeight='bold' style={styles.text}>
            Sign In
        </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.AppBar.primary,
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: 'row'
    },
    text: {
        color: theme.AppBar.primaryText,
        paddingRight: 10,
        fontSize: 16
    }
})