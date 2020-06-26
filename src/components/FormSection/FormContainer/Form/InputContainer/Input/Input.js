//libraries
import React from "react";

//styles
import "./Input.scss";

function Input(props) {
  return (
    <div
      style={props.styles ? props.styles : {}}
      className={`Input ${!props.isValid ? "InvalidInput" : ""}`}
    >
      {props.children ? (
        props.children
      ) : (
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.handleChange(e)}
          checked={props.type === "radio" ? props.checked : ""}
        />
      )}
    </div>
  );
}
export default Input;
