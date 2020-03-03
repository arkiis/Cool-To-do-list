import React from "react";
// Redux
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { labels } from "../../constants/index";
// Actions
import { signUp } from "../../store/actions";
import { hideModal } from "../../store/actions/ModalActions";
import Input from "../Forms/Input.js";
import Message from "../Message";
import Modal from "../Modal";
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
    .required("You need to confirm your password"),
  acceptedTerms: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions")
});

const Register = ({ signUp, loading, error, hideModal }) => {
  const onClose = () => {
    hideModal();
  };
  const onSubmit = () => {
    hideModal();
  };

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
        onSubmit();
      }}
    >
      {({ isSubmitting, isValid }) => (
        //Creating a signup modal
        <Modal title="Sign up" onClose={onClose}>
          <Form className="signUpWrapper">
            <Field
              type="text"
              label={labels.username}
              name="userName"
              component={Input}
            />
            <Field
              type="email"
              label={labels.email}
              name="email"
              component={Input}
            />
            <Field
              type="password"
              label={labels.password}
              name="password"
              component={Input}
            />
            <Field
              type="password"
              label={labels.confirmPassword}
              name="confirmPassword"
              component={Input}
            />
            <div className="authCheckbox">
              <Field
                type="checkbox"
                label={labels.terms}
                name="acceptedTerms"
                component={Input}
              />
            </div>

            <button disabled={!isValid || isSubmitting} type="submit">
              Create My Account
            </button>
            {loading && (
              <div style={{ textAlign: "center" }}>
                <LinearProgress />
              </div>
            )}
            <div>
              <Message error show={error}>
                {NotificationManager.error({ error })}
              </Message>
            </div>
          </Form>
        </Modal>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error
});
const mapDispatchToProps = {
  signUp: signUp,
  hideModal: () => hideModal()
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
