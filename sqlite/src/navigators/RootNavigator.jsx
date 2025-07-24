import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import CreateProduct from '../screens/CreateProduct'
import ProductDetails from '../screens/ProductDetails'
import UpdateProduct from '../screens/UpdateProduct'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Create' component={CreateProduct} />
        <Stack.Screen name='Details' component={ProductDetails} />
        <Stack.Screen name='Update' component={UpdateProduct} />
    </Stack.Navigator>
  )
}

export default RootNavigator