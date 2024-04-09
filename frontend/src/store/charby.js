import { createSlice } from '@reduxjs/toolkit';

const initialState = { hunger: 1 };

const charbySlice = createSlice({
  name: 'charby',
  initialState,
  reducers: {
    feed(state) {
      if (state.hunger < 3) {
        state.hunger++;
      }
    },
    setHungerLevel(state, action) {
      state.hunger = action.payload;
    },
  },
});

export const { feed, setHungerLevel } = charbySlice.actions;
export default charbySlice.reducer;
