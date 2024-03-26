import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting';
import userReducer from './user';
import charbyReducer from './charby';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
    user: userReducer,
    charby: charbyReducer,
  },
});

export default store;
