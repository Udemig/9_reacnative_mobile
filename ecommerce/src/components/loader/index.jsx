//import liraries
import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AppColors from '../../ui/appColors';
import AppStyles from '../../ui/appStyles';

// create a component
const Loader = () => {
  return (
    <View style={AppStyles.centerContainer}>
      <ActivityIndicator size="small" color={AppColors.primary} />
    </View>
  );
};

//make this component available to the app
export default Loader;
