import { combineReducers } from "redux";

import authUser from "./AuthUserReducer";

const mainReducers = combineReducers({
  authUser
});

export default mainReducers;
