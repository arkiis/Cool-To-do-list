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
export const signupUserInFirebase = (user, history) => dispatch => {
  console.log(user);
  dispatch({ type: SIGNUP_USER });
  firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(success => {
      firebase
        .firestore()
        .collection("users")
        .doc(success.uid)
        .set({
          email: success.email,
          createdAt: new Date()
        });
      dispatch({ type: SIGNUP_USER_SUCCESS });
      history.push("/");
      NotificationManager.success("Account Created Successfully");
    })
    .catch(error => {
      dispatch({ type: SIGNUP_USER_FAILURE });
      NotificationManager.error(error.message);
    });
};
