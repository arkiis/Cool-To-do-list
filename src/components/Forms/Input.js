import React from "react";

const Input = ({ label, field, form: { touched, errors }, ...props }) => {
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="input" {...field} {...props} />
      {errors[field.name] && touched[field.name] ? (
        <div>{errors[field.name]}</div>
      ) : null}
    </>
  );
};

export default Input;
