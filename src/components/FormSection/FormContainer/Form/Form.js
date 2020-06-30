//libraries
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

//styles
import "./Form.scss";

//actions
import { addUser } from "../../../../store/actions/users";

//methods
import {
  capitalizeText,
  calculateAge,
  emailIsUsed,
} from "../../../../methods/methods";

//models
import User from "../../../../models/user";

//components
import Label from "./Label/Label";
import Button from "./Button/Button";
import FirstName from "./inputFields/FirstName/FirstName";
import LastName from "./inputFields/LastName/LastName";
import Email from "./inputFields/Email/Email";
import PhoneNumber from "./inputFields/PhoneNumber/PhoneNumber";
import BirthDate from "./inputFields/BirthDate/BirthDate";
import GenderInput from "./inputFields/GenderInput/GenderInput";

function Form() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const sortFieldAndDirection = useSelector(
    (state) => state.sortFieldAndDirection
  );

  const [errorMessage, setErrorMessage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [lastName, setLastName] = useState("");
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [birthDate, setBirthDate] = useState("");
  const [isBirthDateValid, setIsBirthDateValid] = useState(true);
  const [isFemale, setIsFemale] = useState(true);

  const areInputsValid = () => {
    return (
      validator.isAlpha(firstName) &&
      validator.isAlpha(lastName) &&
      validator.isEmail(email) &&
      validator.isMobilePhone(phoneNumber) &&
      validator.isBefore(birthDate)
    );
  };

  const validateInputs = () => {
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhoneNumber();
    validateBirthDate();
  };

  const validateFirstName = () => {
    const isValid = validator.isAlpha(firstName);
    setIsFirstNameValid(isValid);
  };

  const validateLastName = () => {
    const isValid = validator.isAlpha(lastName);
    setIsLastNameValid(isValid);
  };

  const validateEmail = () => {
    const isValid = validator.isEmail(email);
    setIsEmailValid(isValid);
  };

  const validatePhoneNumber = () => {
    const isValid = validator.isMobilePhone(phoneNumber);
    setIsPhoneNumberValid(isValid);
  };

  const validateBirthDate = () => {
    const isValid = validator.isBefore(birthDate);
    setIsBirthDateValid(isValid);
  };

  const getUserObject = () => {
    return new User(
      Date.now(),
      `${firstName} ${lastName}`,
      email,
      phoneNumber,
      calculateAge(birthDate),
      isFemale ? "Female" : "Male"
    );
  };

  const resetInputs = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setPhoneNumber("");
    setBirthDate("");
    setIsFemale(true);
  };

  const resetValidation = () => {
    setIsFirstNameValid(true);
    setIsLastNameValid(true);
    setIsEmailValid(true);
    setIsPhoneNumberValid(true);
    setIsBirthDateValid(true);
  };

  const handleFirstNameInputChange = (e) => {
    const fName = capitalizeText(e.target.value.trim());
    setFirstName(fName);
  };

  const handleLastNameInputChange = (e) => {
    const lName = capitalizeText(e.target.value.trim());
    setLastName(lName);
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value.trim());
  };

  const handleBirthDateInputChange = (e) => {
    setBirthDate(e.target.value.trim());
  };

  const handleGenderInputChange = (e) => {
    setIsFemale(e.target.value === "true");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInputs();
    if (areInputsValid()) {
      const newUser = getUserObject();
      if (emailIsUsed(users, newUser.email)) {
        setErrorMessage(`${newUser.email} is already used!`);
      } else {
        dispatch(addUser(newUser, sortFieldAndDirection));
        setErrorMessage(null);
        resetInputs();
        resetValidation();
      }
    }
  };

  return (
    <>
      {errorMessage ? <p className="errorMessage">{errorMessage}</p> : ""}
      <form onSubmit={(e) => handleSubmit(e)}>
        <Label title="Name" />
        <div className="nameInputsContainer">
          <FirstName
            handleChange={handleFirstNameInputChange}
            isValid={isFirstNameValid}
            value={firstName}
          />
          <LastName
            handleChange={handleLastNameInputChange}
            isValid={isLastNameValid}
            value={lastName}
          />
        </div>

        <Label title="Email" />
        <Email
          handleChange={handleEmailInputChange}
          isValid={isEmailValid}
          value={email}
        />

        <Label title="Phone number" />
        <PhoneNumber
          isValid={isPhoneNumberValid}
          value={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />

        <Label title="Birth date" />
        <BirthDate
          handleChange={handleBirthDateInputChange}
          isValid={isBirthDateValid}
          value={birthDate}
        />

        <Label title="Gender" />
        <GenderInput
          id="male"
          value="false"
          isChecked={!isFemale}
          handleChange={handleGenderInputChange}
          title="Male"
        />
        <GenderInput
          id="female"
          value="true"
          isChecked={isFemale}
          handleChange={handleGenderInputChange}
          title="Female"
        />
        <Button />
      </form>
    </>
  );
}

export default Form;
