import React from 'react'
import Constants from 'expo-constants'
import { View } from 'react-native'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import Signin from './Signin'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Main () {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <AppBar />
      <Stack.Navigator initialRouteName="Sign in">
        <Stack.Screen name="Repositories" component={RepositoryList} />
        <Stack.Screen name="Sign in" component={Signin} />
      </Stack.Navigator>
    </View>
  )
}