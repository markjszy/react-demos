import { createSlice } from '@reduxjs/toolkit';

// notion of a "slice": collection of Redux reducer logic and actions for a single feature
// in your app, usually defined in a single file

// name comes from splitting up root Redux state object into multiple "slices" of state

// createSlice takes care of lots of action-related work:
//  1. generating action type strings
//  2. generating action creator functions
//  3. creating action objects
export const counterSlice = createSlice({
  name: 'counter', // string from the name option is used as the first part of each action type
  initialState: {  // pass in initial state value for reducers so there is a `state` the first time the reducer is called
    value: 0,
  },
  reducers: {
    increment: state => {       // action type of 'counter/increment'
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {      // action type of 'counter/decrement'
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
