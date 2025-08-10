import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import EditScreen from '../screens/EditScreen';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='EditScreen' component={EditScreen} />
    </Stack.Navigator>
  )
}

export default RootNavigator