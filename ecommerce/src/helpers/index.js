import AsyncStorage from '@react-native-async-storage/async-storage';

// LocaleStorage'a kayıt yapacak fonksiyon
const saveToStorage = items => {
  AsyncStorage.setItem('cart', JSON.stringify(items));
};

export { saveToStorage };
