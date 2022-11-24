import { configureStore } from '@reduxjs/toolkit';
import Display from './DisplaySlice';
import cart from './CartSlice';

export const store = configureStore({
    reducer: {
Display,
cart
    }
  })

