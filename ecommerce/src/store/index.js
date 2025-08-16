import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

// Store kurulumu
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

// Store'u export et
export default store;
