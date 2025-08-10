import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from '../screens/MainScreen';
import NoteScreen from '../screens/NoteScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='MainScreen'>
      <Stack.Screen name='MainScreen' component={MainScreen} />
      <Stack.Screen name='NoteScreen' component={NoteScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator