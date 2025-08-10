import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';

// Store kurulumu
const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

// Store'u export et
export default store;
