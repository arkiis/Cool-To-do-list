import React from "react";
// Redux
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import LinearProgress from "@material-ui/core/LinearProgress";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
// Actions
import { signUp } from "../../store/actions";
import Input from "../Forms/Input.js";
import Message from "../Message";

const SignUpSchema = Yup.object().shape({
  userName: Yup.string()
    .required("You need a username silly!")
    .min(3, "Too short")
    .max(25, "Too long"),
  email: Yup.string()
    .email(`email dosen't work :/`)
    .required("You need an email silly!"),
  password: Yup.string()
    .required("You need a password silly!")
    .min(8, "Too short"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Password doesn't match`)
    .required("You need to confirm your password")
});

const Register = ({ signUp, loading, error }) => {
  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptedTerms: false
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await signUp(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <div>
          <div>
            <Form>
              <Field type="text" name="userName" component={Input} />
              <Field type="email" name="email" component={Input} />
              <Field type="password" name="password" component={Input} />
              <Field type="password" name="confirmPassword" component={Input} />
              <Field type="checkbox" name="acceptedTerms" component={Input} />
              <button
                disabled={!isValid || isSubmitting}
                loading={loading ? "Signing up..." : null}
                type="submit"
              >
                Create My Account
              </button>
              <div>
                <Message error show={error}>
                  {error}
                </Message>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error
});
const mapDispatchToProps = {
  signUp: signUp
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
