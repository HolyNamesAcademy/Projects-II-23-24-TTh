import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting';
import userReducer from './user';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
    user: userReducer,
  },
});

export default store;
