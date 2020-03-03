import { SHOW_MODAL, HIDE_MODAL } from "../actions/type";

/**
 * Initial State
 */
const initialState = {
  modalType: null
};

/** Modal redcuer */
export default function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SHOW_MODAL:
      newState.modalType = action.modalType;
      break;
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
  return newState;
}
