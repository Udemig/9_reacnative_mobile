//import liraries
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import AppStyles from '../../ui/appStyles';

// create a component
const CartItem = ({ product }) => {
  console.log(product);

  return (
    <View style={[AppStyles.row, AppStyles.rowAround, AppStyles.cartItem]}>
      {/* Image */}

      <Image source={{ uri: product.images[0] }} />

      {/* Product Info */}
      <View>
        <Text>Product Title</Text>
        <Text>Product Category</Text>

        <View>
          <Text>Quantity Buttons</Text>

          <Text>Product Price</Text>
        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default CartItem;
