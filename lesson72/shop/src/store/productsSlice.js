import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productsApi from '../api/products';

export const fetchAll = createAsyncThunk('products/fetchAll', async () => {
  const response = await productsApi.getProducts();
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
      state.items.push(...action.payload.data.items);
      state.meta = action.payload.meta;
    });
  },
});

// export const {} = productsSlice.actions;

export const selectProducts = (state) => state.products.items;

export default productsSlice.reducer;
