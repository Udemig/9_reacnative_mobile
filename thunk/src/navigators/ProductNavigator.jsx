import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetails from '../screens/ProductDetails';

const Stack = createNativeStackNavigator();

const ProductNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen name='ProductList' component={ProductsScreen}/>
        <Stack.Screen name='ProductDetails' component={ProductDetails} />
    </Stack.Navigator>
  )
}

export default ProductNavigator