import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://dummyjson.com/todos');
  const json = await response.json();
  return json.todos;
});

export const deleteItem = createAsyncThunk(
  'todos/deleteItem',
  async (id, { dispatch }) => {
    await fetch(`https://dummyjson.com/todos/${id}`, {
      method: 'DELETE',
    });
    dispatch(removeItem(id));
  }
);

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addItem(state,action){
      state.items.push({
        todo:action.payload,
        completed: false,
        userID: Math.floor(Math.random() * (100 - 1 + 1) + 1),
      });
    }
  },
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

export const { removeItem } = todosSlice.actions;

export default todosSlice.reducer;
