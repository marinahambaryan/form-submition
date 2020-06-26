//libraries
import React from "react";

//styles
import "./GenderInput.scss";

//components
import Input from "../../InputContainer/Input/Input";
import Label from "../../Label/Label";

function GenderInput(props) {
  return (
    <div className="GenderInput">
      <Input
        type="radio"
        id={props.id}
        name="gender"
        value={props.value}
        checked={props.isChecked}
        handleChange={props.handleChange}
        styles={{ marginLeft: 0, flex: 0, border: "none" }}
      />
      <Label title={props.title} styles={{ margin: 0 }} />
    </div>
  );
}
export default GenderInput;
