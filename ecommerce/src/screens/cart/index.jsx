//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import AppStyles from '../../ui/appStyles';
import { ArrowLeft2 } from 'iconsax-react-nativejs';
import AppColors from '../../ui/appColors';
import EmptyCart from '../../components/cart/emptyCart';
import CartItem from '../../components/cart/cartItem';

// create a component
const CartScreen = () => {
  const cart = useSelector(state => state.cart.items);

  return (
    <View style={AppStyles.container}>
      {/* Header */}
      <View style={[AppStyles.row, AppStyles.rowBetween, AppStyles.cartHeader]}>
        {/* Back Icon */}
        <TouchableOpacity>
          <ArrowLeft2 size="25" color={AppColors.black} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={AppStyles.cartHeaderTitle}>My Cart</Text>

        {/* Empty Div */}
        <View style={{ width: 24 }}></View>
      </View>

      {/* Cards List */}
      {/* Eğer sepette ürün yoksa emptyCart,varsa her bir sepet elemanı için bir cartItem renderla */}
      <View>
        {cart.lenght === 0 ? (
          <EmptyCart />
        ) : (
          <FlatList
            data={cart}
            renderItem={product => <CartItem product={product.item} />}
          />
        )}
      </View>
    </View>
  );
};

//make this component available to the app
export default CartScreen;
