//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AppStyles from '../../ui/appStyles';

// create a component
const Error = ({ message, onretry }) => {
  return (
    <View style={AppStyles.centerContainer}>
      <Text style={AppStyles.errorText}>{message}</Text>

      {onretry && (
        <TouchableOpacity style={AppStyles.retryButton}>
          <Text style={AppStyles.retryText}>Tekrar Dene</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

//make this component available to the app
export default Error;
