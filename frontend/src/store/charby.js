import { createSlice } from '@reduxjs/toolkit';

const initialState = { hunger: 1, animations: [] };

const charbySlice = createSlice({
  name: 'charby',
  initialState,
  reducers: {
    feed(state) {
      if (state.hunger < 0) {
        state.hunger = 0;
      }
      if (state.hunger < 3) {
        state.hunger++;
        state.animations.push('feed');
      }
    },
    setHungerLevel(state, action) {
      state.hunger = action.payload;
    },
    playAnimation(state, action) {
      state.animations.push(action.payload);
    },
  },
});

export const { feed, setHungerLevel, playAnimation } = charbySlice.actions;
export default charbySlice.reducer;
