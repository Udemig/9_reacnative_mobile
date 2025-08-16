//import liraries
import React, { Component, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import AppStyles from './src/ui/appStyles';
import { Provider, useDispatch } from 'react-redux';
import store from './src/store';
import { fetchProducts } from './src/store/slices/productSlice';
import { setCartItems } from './src/store/slices/cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppContent = () => {
  // Dispacth kurulumu
  const dispatch = useDispatch();

  const loadCart = async () => {
    // Locale'den ürünleri alsın
    const cartJSON = (await AsyncStorage.getItem('cart')) || [];

    // Locale'den alınan ürünleri JSON'dan js e çevirsin
    const cartItems = JSON.parse(cartJSON);

    console.log('CART', cartItems);

    // Sepetteki ürünleri store'a kayıt et
    dispatch(setCartItems(cartItems));
  };

  // Bileşen yüklendiğinde store'u güncelle
  useEffect(() => {
    // Api'dan alınan ürünleri store'a kayıt et
    dispatch(fetchProducts());

    loadCart();
  }, []);
  return (
    <SafeAreaView style={AppStyles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

//make this component available to the app
export default App;
