//libraries
import React from "react";

//styles
import "./InputContainer.scss";

//components
import Error from "../Error/Error";

function InputContainer(props) {
  return (
    <div className={`InputContainer ${props.className}`}>
      {props.children}
      {!props.isValid ? <Error field={props.field} /> : ""}
    </div>
  );
}
export default InputContainer;
