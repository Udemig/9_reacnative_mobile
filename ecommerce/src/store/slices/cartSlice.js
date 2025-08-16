import { createSlice } from '@reduxjs/toolkit';
import { saveToStorage } from '../../helpers';
import { Alert } from 'react-native';

const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Sepete elemanları aktaracak fonksiyon
    setCartItems: (state, action) => {
      // Sepete eklenen elemanları state'e aktar
      state.items = action.payload;
    },
    // Sepete ürün ekleyecek fonksiyon
    addToCart: (state, action) => {
      // Action içerisindeki payloada eriş
      const product = action.payload;

      // Sepete eklenecek ürün sepette var mı kontrol et
      const foundedItem = state.items.find(item => item.id === product.id);

      if (foundedItem) {
        // ürünün miktarını bir arttır
        foundedItem.quantity += 1;
      } else {
        // state içerisindeki items'a product'ı ekle
        state.items.push({ ...product, quantity: 1 });
      }

      // Elemanı localeStorage'a kayıt et
      saveToStorage(state.items);
    },
    // Sepetteki ürünün miktarını güncelleyecek fonksiyon
    updateQuantity: () => {},
  },
});

export const { setCartItems, addToCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
