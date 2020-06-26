//libraries
import React from "react";

//styles
import "./FormContainer.scss";

//components
import Form from "./Form/Form";

function FormContainer() {
  return (
    <div className="FormContainer">
      <div className="sectionSubtitle">Registration Form</div>
      <Form />
    </div>
  );
}

export default FormContainer;
