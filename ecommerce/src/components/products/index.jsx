//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AppStyles from '../../ui/appStyles';
import ProductsWrapper from './ProductsWrapper';

// create a component
const Products = () => {
  return (
    <View>
      {/* Title */}
      <View
        style={[AppStyles.row, , AppStyles.rowBetween, AppStyles.productsTop]}
      >
        <Text style={AppStyles.productsTitle}>Products</Text>

        <TouchableOpacity>
          <Text style={AppStyles.button}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* Products */}
      <ProductsWrapper />
    </View>
  );
};

//make this component available to the app
export default Products;
