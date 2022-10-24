import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../store/productsStore';

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
