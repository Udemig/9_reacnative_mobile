//import liraries
import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import AppStyles from '../../ui/appStyles';
import { banners } from '../../constants';
import { screenWidth } from '../../ui/dimensions';

// create a component
const Banner = () => {
  // Herbir banner elemanı için render edilecek content
  const renderItem = ({ item }) => (
    <View
      style={[AppStyles.bannerCard, AppStyles.row, { width: screenWidth - 20 }]}
    >
      <View style={AppStyles.bannerTextContainer}>
        <Text style={AppStyles.bannerTitle}>{item.title} </Text>
        <Text style={AppStyles.bannerSubtitle}>{item.subtitle} </Text>
      </View>
      <Image source={{ uri: item.image }} style={AppStyles.bannerImage} />
    </View>
  );
  return (
    <FlatList
      data={banners}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
    />
  );
};

//make this component available to the app
export default Banner;
