import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://dummyjson.com/todos?limit=10');
  const json = await response.json();
  return json.todos;
});

export const deleteItem = createAsyncThunk(
  'todos/deleteItem',
  async (item, { dispatch }) => {
    await fetch(`https://dummyjson.com/todos/${item.id}`, {
      method: 'DELETE',
    });
    dispatch(removeItem(item));
  }
);

export const addItem = createAsyncThunk(
  'todos/addItem',
  async (text, { dispatch }) => {
    const item = {
      todo: text,
      completed: false,
      userId: 1,
    };
    const response = await fetch(`https://dummyjson.com/todos/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    const json = await response.json();
    dispatch(createItem(json));
  }
);

export const editTodo = createAsyncThunk(
  'todos/editItem',
  async (newItem, { dispatch, getState }) => {
    const item = await getState().todos.items.find(
      (todo) => todo.id === newItem.id
    );
    await fetch(`https://dummyjson.com/todos/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo: newItem.value,
      }),
    });
    dispatch(editItem(newItem));
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
      state.items = state.items.filter(
        (item) =>
          item.id !== action.payload.id || item.todo !== action.payload.todo
      );
    },
    createItem(state, action) {
      state.items.push(action.payload);
    },
    editItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.todo = action.payload.value;
    },
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

export const { removeItem, createItem, editItem } = todosSlice.actions;

export default todosSlice.reducer;
