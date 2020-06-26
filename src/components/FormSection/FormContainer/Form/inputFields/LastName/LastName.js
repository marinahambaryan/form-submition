//libraries
import React from "react";

//components
import InputContainer from "../../InputContainer/InputContainer";
import Input from "../../InputContainer/Input/Input";

function LastName(props) {
  return (
    <>
      <InputContainer
        className="LastNameInputContainer"
        isValid={props.isValid}
        field="Last name"
      >
        <Input
          type="text"
          name="lastName"
          placeholder="Last"
          value={props.value}
          handleChange={props.handleChange}
          isValid={props.isValid}
        />
      </InputContainer>
    </>
  );
}
export default LastName;
