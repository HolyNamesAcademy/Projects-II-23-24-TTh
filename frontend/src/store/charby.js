import { createSlice } from '@reduxjs/toolkit';

const initialState = { hunger: 4 };

const charbySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    feed(state) {
      state.foodLevel++;
    },
    setHungerLevel(state, hunger) {
      state.hunger = hunger;
    },
  },
});

export const { feed } = charbySlice.actions;
export default charbySlice.reducer;
