//import liraries
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  AddCircle,
  ArrowLeft2,
  Bag2,
  MinusCirlce,
  Star1,
} from 'iconsax-react-nativejs';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import AppColors from '../../ui/appColors';
import AppStyles from '../../ui/appStyles';
import AppRoutes from '../../navigation/routes';
import { productsColor } from '../../constants';

// create a component
const ProductDetail = () => {
  // useNavigation ile yönlendirilme yapılan sayfaya birden fazla props geçilebilir.Bu durumda props'lara erişmek için useRoute kullanılır.
  const { params } = useRoute();
  const navigation = useNavigation();
  const product = params.product;

  return (
    <ScrollView>
      {/* Header */}
      <View
        style={[AppStyles.row, AppStyles.rowBetween, AppStyles.detailHeader]}
      >
        {/* Back Icon */}
        <TouchableOpacity>
          <ArrowLeft2 size="25" color={AppColors.black} />
        </TouchableOpacity>
        {/* Title */}

        <Text style={AppStyles.detailHeaderTitle}>Product Detail</Text>

        {/* Cart Icon */}
        <TouchableOpacity
          onPress={() => navigation.navigate(AppRoutes.CART)}
          style={[AppStyles.icon, AppStyles.row]}
        >
          <Bag2 size="24" color={AppColors.textPrimary} />
          <View style={AppStyles.badge}>
            <Text style={AppStyles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Product Image */}
      <Image
        source={{ uri: product.images[0] }}
        style={AppStyles.detailImage}
      />

      {/* Product Info */}
      <View style={AppStyles.detailCard}>
        {/* Top */}
        <View
          style={[AppStyles.row, AppStyles.rowBetween, AppStyles.productTop]}
        >
          <Text style={AppStyles.productDetailTitle}>{product.title}</Text>

          <View style={[AppStyles.row, AppStyles.buttonsWrapper]}>
            <MinusCirlce size="24" color={AppColors.black} />
            <Text style={AppStyles.quantity}>5</Text>
            <AddCircle size="24" color={AppColors.black} />
          </View>
        </View>

        {/* Raiting && Stock */}
        <View style={[AppStyles.row, AppStyles.rowBetween]}>
          <View style={AppStyles.row}>
            <Star1 size="20" color={AppColors.star} />
            <Text style={AppStyles.reviews}>
              4.8
              <Text style={AppStyles.reviewsCount}>(320 Reviews)</Text>
            </Text>
          </View>
          <View style={AppStyles.stock}>
            <Text>Avaliable Stock</Text>
          </View>
        </View>

        {/* Colors */}
        <View style={AppStyles.colorsWrapper}>
          {productsColor.map(item => (
            <TouchableOpacity key={item.id}>
              <Text>Color</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Description */}
        <Text style={AppStyles.descriptionTitle}>Description</Text>

        <Text style={AppStyles.descriptionTitle}>{product.description}</Text>

        {/* Add to cart */}

        <View style={AppStyles.detailBottom}>
          <Text style={AppStyles.productDetailPrice}>$ {product.price}</Text>

          <TouchableOpacity style={AppStyles.productCart}>
            <Bag2 size="24" color={AppColors.textPrimary} />
            <Text style={AppStyles.productCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

//make this component available to the app
export default ProductDetail;
