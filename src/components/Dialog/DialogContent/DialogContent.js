//libraries
import React from "react";

//styles
import "./DialogContent.scss";

function DialogContent(props) {
  return (
    <div
      className="DialogContent"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {props.children}
    </div>
  );
}

export default DialogContent;
