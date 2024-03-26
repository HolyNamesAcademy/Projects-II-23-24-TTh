import { createSlice } from '@reduxjs/toolkit';

const initialState = { hunger: 1 };

const charbySlice = createSlice({
  name: 'charby',
  initialState,
  reducers: {
    feed(state) {
      state.hunger++;
    },
    setHungerLevel(state, hunger) {
      state.hunger = hunger;
    },
  },
});

export const { feed, setHungerLevel } = charbySlice.actions;
export default charbySlice.reducer;
