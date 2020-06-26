//libraries
import React from "react";

//components
import InputContainer from "../../InputContainer/InputContainer";
import Input from "../../InputContainer/Input/Input";

function BirthDate(props) {
  return (
    <>
      <InputContainer isValid={props.isValid} field="Birth date">
        <Input
          type="date"
          name="birthDate"
          placeholder="mm / dd / yy"
          value={props.value}
          handleChange={props.handleChange}
          isValid={props.isValid}
        />
      </InputContainer>
    </>
  );
}
export default BirthDate;
