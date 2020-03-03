import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import modal from "./ModalReducer";
import authReducer from "./AuthUserReducer";

export default combineReducers({
  auth: authReducer,
  modal: modal,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
