import { configureStore } from '@reduxjs/toolkit';
import charbyReducer from './charby';

const store = configureStore({
  reducer: {
    charby: charbyReducer,
  },
});

export default store;
