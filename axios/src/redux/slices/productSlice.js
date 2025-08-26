import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";





export const getProducts = createAsyncThunk(
    'product/getProducts',
    async (_, { rejectWithValue }) => {
        try {

            const response = await api.get('/products')

            return response.data;
        }
        catch (err) {
            console.error(err);
            return rejectWithValue({
                success: false,
                message: "Bağlantı hatası"
            });
        }
    }
)

export const deleteProductThunk = createAsyncThunk(
    'product/deleteProductThunk',
    async ({ id }, { rejectWithValue, dispatch }) => {

        try {

            // kalıcı hafızadan (veritabanı ) silmek için api isteği atıyoruz
            const response = await api.delete(`/products/${id}`);

            // geçici hafızadan (telefonun o anki ekranından) silmek için senkron reducera dispatch atıyoruz.
            if (response.status == 200) await dispatch(deleteProduct(id));

        }
        catch (err) {
            console.error(err);
            return rejectWithValue(err);
        }


    }
)

export const createProductThunk = createAsyncThunk(
    'product/createProductThunk',
    async (product, { rejectWithValue, dispatch }) => {
        try {

            const response = await api.post('/products', product)

            return response.data;

        }
        catch (err) {
            console.error(err)
            return rejectWithValue(err);
        }
    }
)

export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (product, { rejectWithValue, dispatch }) => {
        try {

            const response = await api.patch(`/products/${product.id}`, product)

            return response.data;
        }
        catch (err) {
            console.error(err);
            return rejectWithValue(err)
        }


    }
)



const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        loading: false,
        error: null,
        createError: null,
        updateError: null
    },
    // düz reducerlar senkron işlem meselesi
    reducers: {
        deleteProduct: (state, action) => {
            const id = action.payload;
            state.products = state.products.filter(item => item.id !== id)
        }
    },
    // extra reducerlar thunk meselesi
    extraReducers: (builder) => {
        builder
            // getProducts thunk'ının henüz sonuçlanmamış(yükleniyor) olma durumu
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
            })
            // getProducts thunk'ının reddedilmiş (api hatası, internet yok vs.) olma durumu
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // getProducts thunk'ının kabul edilmiş (istek başarılı, veri geldi) olma durumu
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.products = action.payload;
            })

            // create thunkının olayları

            .addCase(createProductThunk.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createProductThunk.rejected, (state, action) => {
                state.loading = false;
                createError = action.payload;
            })
            .addCase(createProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.createError = null;
                state.products.push(action.payload)
            })

            // update thunkının olayları

            .addCase(updateProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false;
                state.updateError = action.payload;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.updateError = null;

                // eğer itemın idsi bizim aradığımız idye eşitse, güncellenmiş nesneyi döndür, eğer değilse olduğu gibi bırak
                state.products = state.products.map((item) =>{


                    console.log("şuanki eleman: ", item)
                    console.log("bizim aradığımzı eleman: ", action.payload)

                    // aradığım eleman mı?
                    return (item.id == action.payload.id ?
                        // eğer öyleyse güncel veriyi döndür
                        action.payload
                        // değilse eleman olduğu gibi kalsın
                        : item)
                })
            })
    }
})


export const { deleteProduct } = productSlice.actions;
export default productSlice.reducer;