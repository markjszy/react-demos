const createStore = Redux.createStore;

function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      default:
        return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

// Note that a Redux store needs to have a single "root reducer" passed in on creation
let store = createStore(counterReducer)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()))
// See Redux-UI integration info here: https://redux.js.org/tutorials/fundamentals/part-5-ui-react#basic-redux-and-ui-integration
// General steps for hooking up to any UI layer:
// 1. Create Redux store
// 2. Subscribe to updates
// 3. Inside subscription callback:
//    a. Get the current store state
//    b. Extract the data needed by this piece of UI
//    c. Update the UI with the data
// 4. Render UI with initial state if necessary
// 5. Respond to UI inputs by dispatching Redux actions

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}