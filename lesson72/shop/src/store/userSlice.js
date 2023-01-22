import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: {},
  },
  reducers: {
    setUser(state, action) {
      state.name = action.payload;
      console.log(action.payload);
    },
  },
});

export const userInfo = (state) => state.user.name;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
