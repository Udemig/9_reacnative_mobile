import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from '../screens/HomePage';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomePage} />
    </Stack.Navigator>
  )
}

export default Navigator

const styles = StyleSheet.create({})