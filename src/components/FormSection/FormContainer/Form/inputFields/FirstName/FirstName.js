//libraries
import React from "react";

//components
import InputContainer from "../../InputContainer/InputContainer";
import Input from "../../InputContainer/Input/Input";

function FirstName(props) {
  return (
    <>
      <InputContainer
        className="FirstNameInputContainer"
        isValid={props.isValid}
        field="First name"
      >
        <Input
          type="text"
          name="firstName"
          placeholder="First"
          value={props.value}
          handleChange={props.handleChange}
          isValid={props.isValid}
        />
      </InputContainer>
    </>
  );
}
export default FirstName;
