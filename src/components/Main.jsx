import React from 'react'
import Constants from 'expo-constants'
import { View } from 'react-native'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import Signin from './Signin'
import Register from './Register'
import Account from './Account'
import Information from './Information'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Main () {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Stack.Navigator initialRouteName="Repositories">
        <Stack.Screen name="Repositories" component={RepositoryList} />
        <Stack.Screen name="Sign in" component={Signin} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Information" component={Information} />
      </Stack.Navigator>
      <AppBar />
    </View>
  )
}