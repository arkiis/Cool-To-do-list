import { NotificationManager } from "react-notifications";
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
  DELETE_START,
  DELETE_FAIL
} from "./type";

/**
 * Redux Action to SignIn User with Firebase
 */

/**
 * Redux Action to signup user in Firebase
 */
export const signUp = data => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  dispatch({ type: SIGNUP_USER });
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    // Send the verfication email
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();

    await firestore
      .collection("users")
      .doc(res.user.uid)
      .set({
        userName: data.userName
      });
    dispatch({
      type: SIGNUP_USER_SUCCESS
    });
  } catch (err) {
    dispatch({ type: SIGNUP_USER_FAILURE, payload: err.message });
  }
  dispatch({ type: SIGNUP_USER_END });
};

//Login action creator
export const signIn = data => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: SIGNUP_USER });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({ type: SIGNUP_USER_SUCCESS });
  } catch (err) {
    dispatch({ type: SIGNUP_USER_FAILURE, payload: err.message });
  }
  dispatch({ type: SIGNUP_USER_END });
};

//Logout action creator
export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();

    console.log("signout fired!");
  } catch (err) {
    console.log(err.message);
  }
};

/**
 * Verify email action
 */
export const verifyEmail = () => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  dispatch({ type: VERIFY_START });
  try {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
    dispatch({ type: VERIFY_SUCCESS });
  } catch (err) {
    dispatch({ type: VERIFY_FAIL, payload: err.message });
  }
};

//clean up messages
export const clean = () => ({
  type: CLEAN_UP
});

//Delete user
export const deleteUser = () => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const user = firebase.auth().currentUser;
  const userId = getState().firebase.auth.uid;
  dispatch({ type: DELETE_START });
  try {
    await firestore
      .collection("users")
      .doc(userId)
      .delete();
  } catch (err) {
    dispatch({ type: DELETE_FAIL, payload: err.message });
  }
};
