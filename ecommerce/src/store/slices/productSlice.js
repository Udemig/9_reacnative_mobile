import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts } from '../../api/products';

// Api'dan verileri alacak asekron fonksiyon

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => getAllProducts(),
);

// productsSlice oluştur

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder // Yüklenme durumu
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      }) // Veri gelme  durumu
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      }) // Hata durumu
      .addCase(fetchProducts.rejected, state => {
        state.loading = false;
        state.error = "Api'dan ürünler alınırken hata oluştu";
      });
  },
});

export default productSlice.reducer;
