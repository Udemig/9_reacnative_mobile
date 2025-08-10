import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice.js'
import userReducer from './slices/userSlice.js'

const store = configureStore({
    reducer: {
        products: productReducer,
        users: userReducer
    }
})

export default store;