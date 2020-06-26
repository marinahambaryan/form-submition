//libraries
import React, { useState } from "react";
import { useDispatch } from "react-redux";

//actions
import { deleteUser } from "../../../store/actions/users";
import { closeDialog } from "../../../store/actions/dialog";

//styles
import "./ConfirmDeleteDialog.scss";

//components
import DialogContent from "../DialogContent/DialogContent";

function ConfirmDeleteDialog(props) {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeDialog());
  };

  const handleDelete = (id) => {
    console.log("confirm dialog");
    dispatch(deleteUser(id));
  };

  const handleAccept = () => {
    setMessage(`${props.user.name} is deleted !!!!`);
    setTimeout(() => {
      handleClose();
      handleDelete(props.user.id);
      setMessage("");
    }, 1000);
  };

  const handleCancel = () => {
    handleClose();
  };

  return (
    <DialogContent>
      <div className="confirmActionContainer">CONFIRM</div>
      <div className="confirmationAlertText">
        <p>
          Are You sure You want to delete {props.user ? props.user.name : ""} ?
        </p>
      </div>
      <div className="messageContainer">
        <p>{message}</p>
      </div>
      <div className="buttonContainer">
        <button className="accept" onClick={handleAccept}>
          ACCEPT
        </button>
        <button className="decline" onClick={handleCancel}>
          DECLINE
        </button>
      </div>
    </DialogContent>
  );
}

export default ConfirmDeleteDialog;
