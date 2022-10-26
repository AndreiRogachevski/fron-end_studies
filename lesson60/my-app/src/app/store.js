import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../store/productsStore';
import cartReducer from '../store/cartStore';

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
