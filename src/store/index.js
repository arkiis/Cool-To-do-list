import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import mainReducers from "./reducers";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { firebase } from "../firebase";

export const store = createStore(
  mainReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase, getFirestore)),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
  )
);
