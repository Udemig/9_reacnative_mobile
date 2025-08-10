//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AppStyles from '../../ui/appStyles';
import { Bag2 } from 'iconsax-react-nativejs';
import AppColors from '../../ui/appColors';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../navigation/routes';

// create a component
const Header = () => {
  /* Bir react native bileşenine birden fazla stili bir arada vermek için [stil1,stil2,....] */

  // Navigate kurulumu
  const navigation = useNavigation();

  return (
    <View style={AppStyles.wrapper}>
      {/* Profile */}
      <View style={[AppStyles.row, AppStyles.rowBetween]}>
        <View style={[AppStyles.row, AppStyles.profileContainer]}>
          {/* Profile Image */}
          <Image
            style={AppStyles.avatar}
            source={{ uri: 'https://randomuser.me/api/portraits/men/79.jpg' }}
          />

          {/* Profile Info */}
          <View>
            <Text style={AppStyles.title}>Hi,Yusuf</Text>
            <Text style={AppStyles.subtitle}>Let's go shopping</Text>
          </View>
        </View>
        <View style={AppStyles.row}>
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
      </View>
    </View>
  );
};

//make this component available to the app
export default Header;
