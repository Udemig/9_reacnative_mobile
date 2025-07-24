import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './slices/bookSlice'

const store = configureStore({
    // bu yanlış
    // reducer: bookReducer

    //doğrusu
    reducer: {
        books: bookReducer
    }
})

export default store;