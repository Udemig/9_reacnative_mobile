import { View, Text } from 'react-native'
import React from 'react'
import RootNavigator from './src/navigators/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App