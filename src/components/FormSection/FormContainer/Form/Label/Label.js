//libraries
import React from "react";

//styles
import "./Label.scss";

function Label(props) {
  return (
    <div className="Label" style={props.styles ? props.styles : {}}>
      <label>{props.title}</label>
    </div>
  );
}
export default Label;
