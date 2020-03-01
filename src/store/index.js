import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import mainReducers from "./reducers";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { firebase } from "../firebase";

// react-redux-firebase config
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_COMPOSE__ || compose
    : compose;

export const store = createStore(
  mainReducers,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(getFirebase, getFirestore)),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
  )
);
