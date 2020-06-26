//libraries
import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

//components
import InputContainer from "../../InputContainer/InputContainer";
import Input from "../../InputContainer/Input/Input";

function PhoneNumber(props) {
  return (
    <>
      <InputContainer isValid={props.isValid} field="Phone number">
        <Input isValid={props.isValid}>
          <PhoneInput
            international
            value={props.value}
            defaultCountry="AM"
            onChange={props.setPhoneNumber}
          />
        </Input>
      </InputContainer>
    </>
  );
}
export default PhoneNumber;
