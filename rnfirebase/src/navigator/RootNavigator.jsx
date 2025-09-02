import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '../screens/HomePage'
import AddPage from '../screens/AddPage'
import DetailPage from '../screens/DetailPage'
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='HomePage' component={HomePage}/>
        <Stack.Screen name='AddPage' component={AddPage}/>
        <Stack.Screen name='DetailPage' component={DetailPage}/>
    </Stack.Navigator>
  )
}

export default RootNavigator