import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './usersAPI';

const initialState = {
  users: [],
  deleted: [],
  status: 'idle',
};

export const usersAsync = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetchUsers();
  const json = await response.json();
  return json.users;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setDeleteUser: (state, action) => {
      state.deleted = [...state.deleted, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(usersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(usersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users = action.payload;
      });
  },
});

export const { setDeleteUser } = usersSlice.actions;

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
