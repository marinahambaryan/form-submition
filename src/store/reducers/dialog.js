import { OPEN_DIALOG, CLOSE_DIALOG } from "../actions/dialog";

const initialState = {
  open: false,
  dialogType: null,
  userId: null,
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        open: true,
        dialogType: action.dialogType,
        userId: action.userId,
      };

    case CLOSE_DIALOG:
      return { open: false, dialogType: null, userId: null };
    default:
      return state;
  }
};

export default dialogReducer;
