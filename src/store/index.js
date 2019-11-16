import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer";

let initialState;

if (localStorage.getItem("appState")) {
  initialState = JSON.parse(localStorage.getItem("appState"));
} else {
  initialState = {
    buckets: []
  };
}

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
