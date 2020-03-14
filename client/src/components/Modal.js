import React, { memo } from "react";

const Modal = props => {
  console.log(props);
  const onOverlayClick = () => {
    props.onClose();
  };
  const onDialogClick = event => {
    event.stopPropagation();
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal-inner">
        <div className="auth-modal-close">
          <h6>{props.title}</h6>
          <span onClick={onOverlayClick}>X</span>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
