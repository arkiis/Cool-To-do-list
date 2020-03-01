import React from "react";

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <div>
      <input {...field} {...props} />
      <div show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </div>
    </div>
  );
};

export default Input;
