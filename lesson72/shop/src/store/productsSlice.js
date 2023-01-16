import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {productsApi} from '../api/products';

export const fetchAll = createAsyncThunk('products/fetchAll', async (page) => {
  const response = await productsApi.getProducts(page);
  // console.log(response.data);
  return response.data;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    meta: {},
    loading: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.items = action.payload.data;
      state.meta = action.payload.meta;
    });
  },
});

export const selectProducts = (state) => state.products.items;
export const metaProducts = (state) => state.products.meta;

export default productsSlice.reducer;
