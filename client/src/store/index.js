import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { firebase } from "../firebase";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import rootReducer from "./reducers";

/// react-redux-firebase config
const rrConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  attachAuthIsReady: true,
};

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  composeEnhancers(
    reactReduxFirebase(firebase, rrConfig),
    reduxFirestore(firebase),
    applyMiddleware(...middlewares)
  )
);

export default store;
