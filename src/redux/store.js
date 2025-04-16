// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import statsReducer from './statsSlice'; // if you're using it

const store = configureStore({
  reducer: {
    auth: authReducer,
    stats: statsReducer,
  },
});

export default store;
