//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/header';
import AppStyles from '../../ui/appStyles';
import Banner from '../../components/banner';
import Products from '../../components/products';

// create a component
const HomeScreen = () => {
  return (
    <ScrollView style={AppStyles.container}>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Products */}
      <Products />
    </ScrollView>
  );
};

//make this component available to the app
export default HomeScreen;
