import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://dummyjson.com/todos');
  const json = await response.json();
  return json.todos;
});

export const deleteItem = createAsyncThunk('todos/deleteItem', async () => {
  fetch('https://dummyjson.com/todos/1', {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then(console.log);
});

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectTodos = (state) => state.todos.items;

export default todosSlice.reducer;
