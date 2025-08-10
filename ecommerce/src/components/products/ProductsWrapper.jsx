//import liraries
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Loader from '../loader';
import Error from '../error';
import ProductCard from './ProductCard';
import AppStyles from '../../ui/appStyles';

// create a component
const ProductsWrapper = () => {
  // Store'a abone ol
  const { products, error, loading } = useSelector(state => state.products);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error message="Api işlemi sırasında hata oluştu" onretry />
      ) : (
        <View style={AppStyles.productsWrapper}>
          {products.map(item => (
            <ProductCard item={item} key={item.id} />
          ))}
        </View>
      )}
    </View>
  );
};

//make this component available to the app
export default ProductsWrapper;
