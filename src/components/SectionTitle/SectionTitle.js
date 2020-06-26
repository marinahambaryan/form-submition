//librarys
import React from "react";

//styles
import "./SectionTitle.scss";

function SectionTitle(props) {
  return (
    <div className="SectionTitle">
      <h1>{props.title}</h1>
    </div>
  );
}

export default SectionTitle;
