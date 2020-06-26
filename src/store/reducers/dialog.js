import { OPEN_DIALOG, CLOSE_DIALOG, TOGGLE_DIALOG } from "../actions/dialog";

const dialogReducer = (state = false, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        open: true,
        dialogType: action.dialogType,
        userId: action.userId,
      };

    case CLOSE_DIALOG:
      return { open: false };
    case TOGGLE_DIALOG:
      return action.payload;
    default:
      return state;
  }
};

export default dialogReducer;
