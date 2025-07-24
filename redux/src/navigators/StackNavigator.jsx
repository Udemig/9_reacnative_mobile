import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from '../screens/MainScreen';
import CounterScreen from '../screens/CounterScreen';

const Stack = createNativeStackNavigator();


const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='MainScreen'  component={MainScreen}/>
        <Stack.Screen name='CounterScreen' component={CounterScreen}/>
    </Stack.Navigator>
  )
}

export default StackNavigator