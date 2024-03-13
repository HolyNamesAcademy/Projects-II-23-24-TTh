import { createSlice } from '@reduxjs/toolkit';

// This is the API that will be used to fetch the greeting
const greetingApi = '/api/greeting';

// This is what we want the app to start as when it is reloaded.
const initialState = {
  name: '',
  greeting: '',
};

// createSlice creates an object that can store the values above
// and apply changes to them (called actions). These changes are
// applied with the dispatch function.
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

// Define how we get data from the store for this slice.
export const getName = (store) => store.greeting.name;
export const getGreeting = (store) => store.greeting.greeting;

// Any function that needs to access the store and call an
// API is an "Async Action". To call these, pass them into
// the dispatch function. It can then itself dispatch changes
// to the store using actions.
export async function fetchGreeting(dispatch, getState) {
  const name = getName(getState());

  // Create the request path
  let path = greetingApi;
  if (name) {
    path += `?name=${name}`;
  }

  // Make the request to the Java API
  const response = await fetch(path);

  // Parse the response from a string into json
  const data = await response.json();

  // Access the reducer for the greeting value
  const { setGreeting } = greetingSlice.actions;

  // Set the greeting value
  dispatch(setGreeting(data.greeting));
}

// Export the actions from the slice.
export const { setName } = greetingSlice.actions;
export default greetingSlice.reducer;
