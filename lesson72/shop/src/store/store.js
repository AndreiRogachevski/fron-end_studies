import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    user: userSlice,
  },
});
