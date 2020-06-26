export const OPEN_DIALOG = "OPEN_DIALOG";
export const CLOSE_DIALOG = "CLOSE_DIALOG";

export const openDialog = (dialogType, userId) => {
  return {
    type: OPEN_DIALOG,
    dialogType,
    userId,
  };
};

export const closeDialog = () => {
  return {
    type: CLOSE_DIALOG,
  };
};
