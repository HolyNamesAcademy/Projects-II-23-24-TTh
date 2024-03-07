import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting';
import charbyReducer from './charby';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
    charby: charbyReducer,
  },
});

export default store;
