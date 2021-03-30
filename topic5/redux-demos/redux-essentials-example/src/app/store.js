import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';


/*
 * configureStore requires a `reducer` argument
 *     benefits of configureStore: add developer-friendly middleware, maximize inspection with Redux DevTools Extension
 */
export default configureStore({
  reducer: { 
    // key names in the object define the keys in our final state value
    counter: counterReducer, // "have a `state.counter` section of our Redux state object, and have `counterReducer` function in charge of updating it in response to dispatched actions"
  },
});
