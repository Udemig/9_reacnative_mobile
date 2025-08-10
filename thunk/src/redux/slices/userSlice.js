import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// 1) önce asenkron aksiyonu thunk olarak belirleriz

export const fetchUsers = createAsyncThunk(
    // sliceismi/thunkismi
    'users/fetchUsers',
    //bu thunk çağrıldığında yürütülecek asenkron fonksiyonu belirtiriz.
    async () => {
        const response = await axios.get('https://fakestoreapi.com/users')

        // gelen cevabı ne yapacağız?
        // extraReducers'ın erişebilmesi için return edicez.
        return response.data
    }
)


const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        isLoading: false,
        error: null
    },
    reducers: {},

    // 2) Thunk'taki olası senaryoları (istek kabulü, reddi, veya yükleniyor olması) yakalayıp bunlar için çözümleri belirteceğiz.

    //buradaki builder, Redux'ın kendisinden gelen bir fonksiyondur, addCase ile her bir senaryo için yeni bir case oluştururuz.
    extraReducers: (builder) => {

        builder
            // 1. parametre fetchUsers'ın yükleniyor olma durumu
            // 2. bu durumda gerçekleşecek olay
            .addCase(fetchUsers.pending,
                (state) => {
                    state.isLoading = true
                })
            // thunk'ın reddedilme durumu
            .addCase(fetchUsers.rejected,
                (state) => {
                    state.isLoading = false
                    state.error = "Hata oluştu."
                })
            // thunk'ın başarılı istek durumu
            .addCase(fetchUsers.fulfilled,
                (state, action) => {
                    state.isLoading = false
                    state.users = action.payload;
                })
    }
})

export default userSlice.reducer;