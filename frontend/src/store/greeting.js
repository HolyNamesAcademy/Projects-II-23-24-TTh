import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  greeting: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setGreeting(state, action) {
      state.greeting = action.payload;
    },
  },
});

export const getName = (store) => store.greeting.name;
export const getGreeting = (store) => store.greeting.greeting;

export const { setName, setGreeting } = greetingSlice.actions;
export default greetingSlice.reducer;
