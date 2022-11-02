import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/todos');
      if (!response.ok) {
        console.log('something wrong with response');
      }
      const json = await response.json();
      return json;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addItem = createAsyncThunk(
  'todos/addItem',
  async (newItem, { dispatch, rejectWithValue }) => {
    const item = {
      text: newItem.value,
      completed: newItem.check,
    };
    try {
      const response = await fetch(`http://localhost:3000/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      if (!response.ok) {
        console.log('something wrong with ADD response');
      }
      const json = await response.json();
      dispatch(createItem(json));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteItem = createAsyncThunk(
  'todos/deleteItem',
  async (item, { dispatch, rejectWithValue }) => {
    try {
      await fetch(`http://localhost:3000/todos/${item.id}`, {
        method: 'DELETE',
      }).then((response) => {
        if (!response.ok) {
          console.log('something wrong with DELETE response');
        }
      });
      dispatch(removeItem(item));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editTodo = createAsyncThunk(
  'todos/editItem',
  async (newItem, { dispatch, rejectWithValue }) => {
    const item = {
      text: newItem.value,
      completed: newItem.check,
    };
    try {
      await fetch(`http://localhost:3000/todos/${newItem.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      }).then((response) => {
        if (!response.ok) {
          console.log('something wrong with EDIT response');
        }
      });
      dispatch(editItem(newItem));
    } catch (error) {
      return rejectWithValue(error.message);
    }
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
      item.text = action.payload.value;
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
