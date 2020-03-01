import { firebase } from "../../firebase";

import { NotificationManager } from "react-notifications";
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE
} from "./type";

/**
 * Redux Action to SignIn User with Firebase
 */
// export const signinUserInFirebase = (user, history) => dispatch => {
// dispatch({ type: LOGIN_USER });
// firebase
// .auth()
// .signInWithEmailAndPassword(user.email, user.password)
// .then(res => {
//     dispatch({
//         type: LOGIN_USER_SUCCESS,
//         payload:
//     })
// })
// }

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
    NotificationManager.success(`You're In!🥳`);
  } catch (err) {
    dispatch({ type: SIGNUP_USER_FAILURE, payload: err.message });
    NotificationManager.error(err.message);
  }
};
