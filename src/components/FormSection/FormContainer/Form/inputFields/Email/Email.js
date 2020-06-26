//libraries
import React from "react";

//components
import InputContainer from "../../InputContainer/InputContainer";
import Input from "../../InputContainer/Input/Input";

function Email(props) {
  return (
    <>
      <InputContainer isValid={props.isValid} field="Email">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={props.value}
          handleChange={props.handleChange}
          isValid={props.isValid}
        />
      </InputContainer>
    </>
  );
}
export default Email;
