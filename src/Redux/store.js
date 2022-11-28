import { configureStore } from '@reduxjs/toolkit';
import Display from './displaySlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
Display,
cart
    }
  })

