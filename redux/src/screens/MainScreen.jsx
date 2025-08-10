import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const MainScreen = ({ navigation }) => {

  const { theme } = useSelector(state => state.themeReducer)
  const { counter } = useSelector(state => state.counterReducer);


  // Alert.alert('Şuan uygulama '+ theme + ' renk modunda')

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme == "dark" ? "black" : "white"
    }}>

      <Button
        title='Counter ekranına git'
        onPress={() => navigation.navigate('CounterScreen')}
      />

      <Text style={{ fontSize: 30, textAlign: "center" }}>Sayaç: {counter}</Text>

    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({})