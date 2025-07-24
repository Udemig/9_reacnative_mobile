import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get('https://fakestoreapi.com/products')

        console.log(response.data)
        return response.data
    }
)





const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        favorites: [],
        isLoading: false,
        error: null
    },
    // senkron işlemler için (async-await kullanılmayan, api çağrısı vs. olmayan işlemler)
    reducers: {
        toggleFavorite: (state, action) => {
            const id = action.payload;
            // favoriye ekleme tuşuna basılan ürün favorilerde YOKSA
            if (!state.favorites.includes(id)) {
                // favorilere ekle
                state.favorites.push(id)
            }
            // yok eğer varsa
            else {
                state.favorites =
                    state.favorites.filter(productId => productId !== id)
            }
        },
    },

    // asenkron, thunk gerektiren, API çağrısı, asyncStorage vs. işlemler içindir
    extraReducers: (builder) => {

        // isteğimin yükleniyor olması durumunda
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                console.log("Şuanda api isteği atılıyor.")
            })
            // başarısız olması durumunu yakala
            .addCase(fetchProducts.rejected, (state)=>{
                state.isLoading = false;
                state.error = "Hata oluştu."
                console.log("Api isteğinde hata oluştu!!!")
            })
            // başarılı olması durumunu yakala
            .addCase(fetchProducts.fulfilled, (state,action)=>{
                state.items = action.payload
                state.isLoading = false;
                console.log("Api isteği başarıyla atıldı ve cevap alındı.")
            })
    }

})


export const { toggleFavorite } = productSlice.actions;
export default productSlice.reducer;