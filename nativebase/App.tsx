import { StyleSheet, Text, View } from 'react-native'
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "./global.css";
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './src/navigator/index'

const App = () => {
  return (
    <GluestackUIProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default App

const styles = StyleSheet.create({})