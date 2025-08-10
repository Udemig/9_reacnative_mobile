//import liraries
import React, { Component, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import AppStyles from './src/ui/appStyles';
import { Provider, useDispatch } from 'react-redux';
import store from './src/store';
import { fetchProducts } from './src/store/slices/productSlice';

const AppContent = () => {
  // Dispacth kurulumu
  const dispatch = useDispatch();

  // Bileşen yüklendiğinde store'u güncelle
  useEffect(() => {
    dispatch(fetchProducts());
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
