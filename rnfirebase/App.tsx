import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigator/RootNavigator';
import { getFirestore } from '@react-native-firebase/firestore';
import { getStorage } from '@react-native-firebase/storage';
import { app } from './src/firebase/index.js'
import { Cloudinary } from '@cloudinary/url-gen/index';
import { Provider } from 'react-redux';
import store from './src/redux/store.js';
import AuthWatcher from './src/components/AuthWatcher.jsx'

export const db = getFirestore();
export const storage = getStorage();

const App = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dgb1bomm8',
      apiKey: "895479223782638",
      apiSecret: "FjN-E0fewRITaYbte6PIiTCCBco"
    }
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthWatcher>
          <RootNavigator />
        </AuthWatcher>
      </NavigationContainer>
    </Provider>
  )
}

export default App