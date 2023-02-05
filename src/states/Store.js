import { combineReducers, createStore } from "redux";
import { counterReducer } from "./CounterState";

// combineReducers' parameter has to be an "object"
const rootReducer = combineReducers({
  //   counterReducer,
  counter: counterReducer,
});

// export const store = createStore(counterReducer);
export const store = createStore(rootReducer);
console.log(store);
