//import liraries
import React, { Component } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppRoutes from './routes';
import HomeScreen from '../screens/home';
import ProductDetail from '../screens/detail';
import CartScreen from '../screens/cart';

const Stack = createNativeStackNavigator();
const NativeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={AppRoutes.HOME} component={HomeScreen} />
      <Stack.Screen name={AppRoutes.DETAIL} component={ProductDetail} />
      <Stack.Screen name={AppRoutes.CART} component={CartScreen} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default NativeStackNavigator;
