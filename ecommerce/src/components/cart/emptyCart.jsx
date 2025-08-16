//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AppStyles from '../../ui/appStyles';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../navigation/routes';

// create a component
const EmptyCart = () => {
  const navigation = useNavigation();
  return (
    <View style={AppStyles.emptyContainer}>
      <View style={AppStyles.emptyWrapper}>
        <Text style={AppStyles.emptyTitle}>Cart is empty</Text>
        <Text style={AppStyles.emptyDescription}>
          Go to home page to add products your cart
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(AppRoutes.TAB)}
          style={AppStyles.emptyButton}
        >
          <Text style={AppStyles.emptyButtonText}>Go to home page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//make this component available to the app
export default EmptyCart;
