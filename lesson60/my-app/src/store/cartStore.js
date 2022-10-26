import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    setToCart(state, action) {
      if (state.items.some((item) => item.id === action.payload)) {
        const item = state.items.find((item) => item.id === action.payload);
        item.count = item.count + 1;
      } else {
        state.items.push({
          id: action.payload,
          count: 1,
        });
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const count = state.items.find((i) => i.id === id).count;
      if (count > 1) {
        state.items.map((item) => {
          if (item.id === id) {
            item.count = item.count - 1;
          }
          return item;
        });
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const { setToCart, removeItem } = cartSlice.actions;
export const cartItems = (state) => state.cart.items;

export default cartSlice.reducer;
