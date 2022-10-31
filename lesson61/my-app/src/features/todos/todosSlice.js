import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('http://192.168.0.139:3000/todos/');
  const json = await response.json();
  console.log(json);
  return json;
});

export const deleteItem = createAsyncThunk(
  'todos/deleteItem',
  async (item, { dispatch }) => {
    await fetch(`http://192.168.0.139:3000/todos/${item.id}`, {
      method: 'DELETE',
    });
    dispatch(removeItem(item));
  }
);

export const addItem = createAsyncThunk(
  'todos/addItem',
  async (text, { dispatch }) => {
    const item = {
      text,
      completed: false,
    };
    const response = await fetch(`http://192.168.0.139:3000/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    const json = await response.json();
    console.log(json);
    dispatch(createItem(json));
  }
);

export const editTodo = createAsyncThunk(
  'todos/editItem',
  async (newItem, { dispatch, getState }) => {
    console.log(newItem);
    const item = await getState().todos.items.find(
      (todo) => todo.id === newItem.id
    );
    await fetch(`http://192.168.0.139:3000/todos/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: newItem.value,
        completed: newItem.completed,
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
