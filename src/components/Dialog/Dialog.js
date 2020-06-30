//libraries
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//styles
import "./Dialog.scss";

//actions
import { closeDialog, openDialog } from "../../store/actions/dialog";

//components
import ConfirmDeleteDialog from "./ConfirmDeleteDialog/ConfirmDeleteDialog";
import WelcomeDialog from "./WelcomeDialog/WelcomeDialog";

function Dialog() {
  const [user, setUser] = useState({});

  const dialog = useSelector((state) => state.dialog);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeDialog(false));
  };

  useEffect(() => {
    setUser(dialog.open ? users.find((user) => user.id === dialog.userId) : {});
  }, [dialog, users]);

  useEffect(() => {
    let localUsers = JSON.parse(localStorage.getItem("users"));
    if (!localUsers) {
      dispatch(openDialog("changeDataSettings", "0"));
    }
  }, [dispatch]);

  return (
    <div
      className="Dialog"
      onClick={handleClose}
      style={{ display: dialog.open ? "flex" : "none" }}
    >
      {dialog.dialogType === "changeDataSettings" ? (
        <WelcomeDialog />
      ) : (
        <ConfirmDeleteDialog user={user} />
      )}
    </div>
  );
}

export default Dialog;
