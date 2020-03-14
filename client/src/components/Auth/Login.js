import React, { useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { labels } from "../../constants/index";
// Actions
import { signIn, clean } from "../../store/actions/AuthActions";
import { hideModal } from "../../store/actions/ModalActions";
import Input from "../Forms/Input.js";
import Message from "../Message";
import Modal from "../Modal";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(`email dosen't work :/`)
    .required("You need an email silly!"),
  password: Yup.string()
    .required("You need a password silly!")
    .min(8, "Too short")
});

const Login = ({ signIn, loading, error, hideModal, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  const onClose = () => {
    hideModal();
  };
  const onSubmit = () => {
    hideModal();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await signIn(values);
        setSubmitting(false);
        onSubmit();
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Modal title="Sign In" onClose={onClose}>
          <Form className="signUpWrapper">
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

            <button disabled={!isValid || isSubmitting} type="submit">
              Sign in
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
  signIn: signIn,
  hideModal: () => hideModal(),
  cleanUp: clean
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
