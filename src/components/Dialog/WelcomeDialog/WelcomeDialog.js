//libraries
import React from "react";
import { useDispatch } from "react-redux";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

//styles
import "./WelcomeDialog.scss";

//actions
import { setUsersList } from "../../../store/actions/users";
import { closeDialog } from "../../../store/actions/dialog";

//components
import DialogContent from "../DialogContent/DialogContent";

//dummy data
import { USERS } from "../../../data/dummy-data";

function WelcomeDialog() {
  const [isAllDataChosen, setIsAllDataChosen] = React.useState(true);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setIsAllDataChosen(event.target.checked);
  };

  const handleConfirm = () => {
    let usersList = isAllDataChosen ? USERS : [];
    dispatch(setUsersList(usersList));
    dispatch(closeDialog());
  };

  return (
    <DialogContent>
      <div className="welcomeContainer">Welcome!</div>
      <div className="emojiContainer">
        <span role="img" aria-label="sheep">
          🎉🎉🎉
        </span>
      </div>
      <div className="textContainer">
        <p>Do you want to see the initial dummy data ?</p>
        <p>Choose by the help of the switch and confirm your choice !</p>
      </div>
      <div className="buttonsContainer">
        <Switch
          checked={isAllDataChosen}
          onChange={handleChange}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Button variant="outlined" color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </div>
    </DialogContent>
  );
}

export default WelcomeDialog;
