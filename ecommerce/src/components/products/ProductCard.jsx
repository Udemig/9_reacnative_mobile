//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AppStyles from '../../ui/appStyles';
import { Heart } from 'iconsax-react-nativejs';
import AppColors from '../../ui/appColors';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../navigation/routes';

// create a component
const ProductCard = ({ item }) => {
  // Navigation Kurulumu
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(AppRoutes.DETAIL, { product: item })}
      style={AppStyles.productCard}
    >
      {/* Image */}
      <Image source={{ uri: item.images[0] }} style={AppStyles.productImage} />

      {/* Favorite Icon */}
      <TouchableOpacity style={AppStyles.favoriteIcon}>
        <Heart size="20" color={AppColors.white} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={AppStyles.productTitle}>{item.title} </Text>
      {/* Brand */}
      <Text style={AppStyles.productBrand}>{item.brand} </Text>
      {/* Price */}
      <Text style={AppStyles.productPrice}>${item.price} </Text>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default ProductCard;
