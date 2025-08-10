import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductNavigator from './ProductNavigator';

const Tabs = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tabs.Navigator>
        <Tabs.Screen  name='Home' component={HomeScreen} />
        <Tabs.Screen  name='Products' component={ProductNavigator} />
    </Tabs.Navigator>
  )
}

export default RootNavigator