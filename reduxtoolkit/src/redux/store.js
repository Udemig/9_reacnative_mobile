import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice.js'

const store = configureStore({
    reducer:userReducer
})


export default store;