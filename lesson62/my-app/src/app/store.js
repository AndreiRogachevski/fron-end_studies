import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
=======
import todosReducer from '../features/todos/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
>>>>>>> d9538636367796709c533322e57efbe54488ccc0
  },
});
