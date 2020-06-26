//libraries
import React from "react";

//styles
import "./Error.scss";

function Error(props) {
  return (
    <div className="Error">
      <p>{props.field} is not valid! </p>
    </div>
  );
}

export default Error;
