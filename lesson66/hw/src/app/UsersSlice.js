import { createSlice } from '@reduxjs/toolkit';

export const Users = createSlice({
  name: 'users',
  initialState: {
    value: [],
    sort: {
      property: '',
      order: true,
    },
  },
  reducers: {
    sort: (state, action) => {
      
    },
  },
});
