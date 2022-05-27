import React from 'react'
import Constants from 'expo-constants'
import { View } from 'react-native'
import RepositoryList from './RepositoryList'

export default function Main () {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
        <RepositoryList />
    </View>
  )
}