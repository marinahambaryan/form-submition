//libraries
import React from "react";

//components
import SectionTitle from "../SectionTitle/SectionTitle";
import FormContainer from "./FormContainer/FormContainer";

//styles
import "./FormSection.scss";

function FormSection() {
  return (
    <div className="FormSection">
      <SectionTitle title="Form" />
      <FormContainer />
    </div>
  );
}

export default FormSection;
