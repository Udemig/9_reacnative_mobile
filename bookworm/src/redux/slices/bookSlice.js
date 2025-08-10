import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
]

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        // push methodu eski bir JS metodudur ve direkt olarak dizinin kendisinde değişiklik yapar
        addBook: (state, action) => {
            try{
                const item = {
                ...action.payload,
            }

            // en sonunda da state'e (geçici hafızaya) pushla.
            state.push(item);
            }
            catch(err){
                console.error(err)
            }
        },

        // filter metodu ise yeni bir JS metodudur ve direkt olarak dizinin kendisinde değişiklik yapmaz, dizinin filtrelenmiş halini bize döndürür ve bizim bunu state'e manuel olarak eklememiz gerekir. Bu eklemeyi yaptıktan sonra da güncellenmiş state'i return etmemiz gerekir
        deleteBook: (state, action) => {
            state = state.filter(book => book.id != action.payload);
            return state;
        },

        updateBook: (state, action) => {
            const { id, book } = action.payload;

            // önce güncellemek istediğimiz id'ye sahip elemanın dizi içerisindeki sıra numarasını(indexini) buluyoruz.
            const index = state.findIndex(book => book.id == id)

            if (index !== -1) {
                // sonrasında bu indexe(sıra numarasına) sahip state'deki elemanın önce kendi değerlerini alıyoruz, sonrasında üstüne güncellediğimiz değerleri koyuyoruz.
                state[index] = { ...state[index], ...book }
                console.log("güncelleme başarıyla yapıldı.")
            }

            return state;
        },

        setBooks: (state,action) => {
            state = action.payload;
            return state;
        }
    }
})

// export reducer
export default bookSlice.reducer

// export actions
export const { addBook, deleteBook, updateBook, setBooks } = bookSlice.actions