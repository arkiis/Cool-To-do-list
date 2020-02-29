import { combineReducers } from "redux";
import main from "./mainreducers";
import authUser from "./AuthUserReducer";

const mainReducers = combineReducers({
  main,
  authUser
});

export default mainReducers;
