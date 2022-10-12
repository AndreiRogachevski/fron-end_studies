import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './usersAPI';
import { fetchUser } from './userAPI';

const initialState = {
  users: [],
  user: 0,
  status: 'idle',
};

export const usersAsync = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetchUsers();
  const json = await response.json();
  return json.users;
});
export const userAsync = createAsyncThunk('users/fetchUser', async (id) => {
  const response = await fetchUser(id);
  const json = await response.json();
  console.log(json);
  return json;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersId: (state, action) => (state.user = action.payload),
  },
  extraReducers: (builder) => {
    builder
      .addCase(usersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(usersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      });
  },
});

export const { setUsersId } = usersSlice.actions;

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
