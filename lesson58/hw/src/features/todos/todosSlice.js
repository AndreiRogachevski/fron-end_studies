import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter(
        (item, index) =>
          item !== action.payload.text || index !== action.payload.index
      );
    },
  },
});

export const { add, deleteItem } = todosSlice.actions;

export const selectTodos = (state) => state.todos.value;

export default todosSlice.reducer;
