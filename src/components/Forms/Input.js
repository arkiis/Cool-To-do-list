import React from "react";
import WarningRounded from "@material-ui/icons/WarningRounded";

const Input = ({ label, field, form: { touched, errors }, ...props }) => {
  return (
    <>
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className="input" {...field} {...props} />
      {errors[field.name] && touched[field.name] ? (
        <div className="errorInput">
          <WarningRounded />
          {errors[field.name]}
        </div>
      ) : null}
    </>
  );
};

export default Input;
