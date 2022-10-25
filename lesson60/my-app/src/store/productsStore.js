import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://dummyjson.com/products');
    const json = await response.json();
    return json.products;
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    cart: [],
    status: 'idle',
  },
  reducers: {
    setToCart: (state, action) => {
      if (!state.cart.includes(action.payload)) {
        state.cart = [...state.cart, action.payload];
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const selectProducts = (state) => state.products.items;
export const productStatus = (state) => state.products.status;
export const cartProducts = (state) => state.products.cart;

export const { setToCart } = productSlice.actions;

export default productSlice.reducer;
