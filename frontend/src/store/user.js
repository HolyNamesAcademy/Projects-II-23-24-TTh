import { createSlice } from '@reduxjs/toolkit';

// This is the API that will be used to fetch the greeting
const usersApiBase = '/api/users';

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

// Any function that needs to access the store and call an
// API is an "Async Action". To call these, pass them into
// the dispatch function. It can then itself dispatch changes
// to the store using actions.
export function login(username, password) {
  return async (dispatch) => {
    // Create the request path
    const path = `${usersApiBase}/login`;

    // Make the request to the Java API
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    // Parse the response from a string into json
    const data = await response.json();

    // eslint-disable-next-line no-console
    console.log(data);

    // Access the reducer for the greeting value
    const { setUser } = userSlice.actions;

    // Set the greeting value
    dispatch(setUser(data.user));
  };
}

export function signup(username, name, email, password) {
  return async (dispatch) => {
    // Create the request path
    const path = `${usersApiBase}/sign-up`;

    // Make the request to the Java API
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        name,
        email,
        password,
      }),
    });
    // Parse the response from a string into json
    const data = await response.json();

    // eslint-disable-next-line no-console
    console.log(data);

    // Access the reducer for the greeting value
    const { setUser } = userSlice.actions;

    // Set the greeting value
    dispatch(setUser(data.user));
  };
}
