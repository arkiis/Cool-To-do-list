import { SHOW_MODAL, HIDE_MODAL } from "./type";

/**
 * Action creators
 */

export const showModal = modalType => {
  return {
    type: SHOW_MODAL,
    modalType
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  };
};
