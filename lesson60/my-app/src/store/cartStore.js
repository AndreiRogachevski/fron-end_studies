import { createSlice } from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItemsId: [],
  },
  reducers: {},
});

export default cartSlice.reducer;
