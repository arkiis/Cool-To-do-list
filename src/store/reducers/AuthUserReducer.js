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
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_END,
  VERIFY_START,
  VERIFY_SUCCESS,
  VERIFY_FAIL,
  CLEAN_UP,
  DELETE_FAIL
} from "../actions/type";

/**
 * initial auth user
 */

const initialState = {
  error: null,
  loading: false,
  verifyEmail: {
    error: null,
    loading: false
  },
  deleteUser: {
    loading: false,
    error: null
  }
};
//helper functions

const signUp = state => {
  return { ...state, loading: true };
};
const signUpSuccess = state => {
  return { ...state, error: false };
};
const signUpError = (state, payload) => {
  return { ...state, error: payload };
};
const signUpEnd = state => {
  return { ...state, loading: false };
};
const verifyStart = state => {
  return {
    ...state,
    verifyEmail: { ...state.verifyEmail, loading: true }
  };
};

const verifySuccess = state => {
  return {
    ...state,
    verifyEmail: { ...state.verifyEmail, loading: false, error: false }
  };
};

const verifyFail = (state, payload) => {
  return {
    ...state,
    verifyEmail: { ...state.verifyEmail, loading: false, error: payload }
  };
};

const deleteFail = (state, payload) => {
  return {
    ...state,
    deleteUser: { ...state.deleteUser, loading: false, error: payload }
  };
};

const cleanUp = state => {
  return {
    ...state,
    error: null,
    loading: false,
    verifyEmail: {
      ...state.verifyEmail,
      loading: false,
      error: null
    },
    deleteUser: {
      ...state.deleteUser,
      loading: false,
      error: null
    }
  };
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAN_UP:
      return cleanUp(state);
    case SIGNUP_USER:
      return signUp(state);

    case SIGNUP_USER_SUCCESS:
      return signUpSuccess(state);

    case SIGNUP_USER_FAILURE:
      return signUpError(state, payload);

    case SIGNUP_USER_END:
      return signUpEnd(state);

    case VERIFY_START:
      return verifyStart(state);

    case VERIFY_SUCCESS:
      return verifySuccess(state);
    case VERIFY_FAIL:
      return verifyFail(state, payload);
    case DELETE_FAIL:
      return deleteFail(state, payload);
    default:
      return state;
  }
};
