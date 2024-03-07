import { createSlice } from '@reduxjs/toolkit';

// This is the API that will be used to fetch the greeting
// const usersApiBase = '/api/users';

// This is what we want the app to start as when it is reloaded.
const initialState = {};

// createSlice creates an object that can store the values above
// and apply changes to them (called actions). These changes are
// applied with the dispatch function.
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state = action.payload;
    },
  },
});

// Define how we get data from the store for this slice.
export const getUser = (store) => store.user;

// Export the actions from the slice.
// export const { setU } = userSlice.actions;
export default userSlice.reducer;
