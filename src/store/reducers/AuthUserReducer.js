/**
 * Auth User Reducers
 */
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE
} from "../actions/type";

/**
 * initial auth user
 */

const initialState = {
  loading: false
  //will add more
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, loading: true };

    case SIGNUP_USER_SUCCESS:
      return { ...state, loading: false };

    case SIGNUP_USER_FAILURE:
      return { ...state, loading: false };

    default:
      return { ...state };
  }
};
