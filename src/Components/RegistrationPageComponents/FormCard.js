// THIS FORM HAS VALIDATION ON EVERY KEYSTROKE + WHEN INPUT LOOSE FOCUS.

import Card from "../../UI/Card";
import styles from "./FormCard.module.css";
import Input from "../../UI/Input/Input";
import SubHeader from "./SubHeader";
import { Prompt, useHistory } from "react-router-dom";
import TextArea from "../../UI/TextArea/TextArea";
import SelectNationality from "../../UI/Select/SelectNationality";
import SelectClass from "../../UI/Select/SelectClass";
import CheckBoxInput from "../../UI/Input/CheckBoxInput";
import FormButtonGroup from "../../UI/Button/FormButtonGroup";
import useInputValidation from "../../Hooks/use-input-validation";
import { useState } from "react";
import useInputValidationFile from "../../Hooks/use-input-validation-file";
import SelectCountryCode from "../../UI/Select/SelectCountryCode";
import axios from "axios";
import { useDispatch } from "react-redux";
import { modalSliceActions } from "../../ReduxStore/modal-slice";

const namePattern = /^[a-zA-Z]{4,}$/;
const datePattern = /^(19|20)[0-9]{2}-[0-1][0-9]-[0-3][0-9]$/;
const nationPattern = /^[a-zA-Z\s]{4,}$/;
const classPattern = /^[-a-zA-Z]{5,}$/;
const emailPattern = /^(www.)?[a-zA-Z0-9.-]{0,}@[a-z]{3,6}.(com|co|org|in)$/;
const passwordPattern = /^[\S]{6,}$/;
const countryCodepattern = /^[0-9]{1,5}$/;
const contactPattern = /^[0-9]{10,11}$/;
const commentPattern = /^[\s\S]{10,}$/;

const FormCard = (props) => {
  const [formIsTouched, setFormIsTouched] = useState(false);
  const [lastConfirmationCheck, setLastConfirmationCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [cnfPasswordType, setCnfPasswordType] = useState("password");

  const dispatch = useDispatch();

  const history = useHistory();

  const formTouchedTrueHandler = () => {
    setFormIsTouched(true);
  };
  const formTouchedFalseHandler = () => {
    setFormIsTouched(false);
  };

  const confirmationToggleHandler = () => {
    setLastConfirmationCheck((currentState) => !currentState);
  };

  const showHidePasswordHandler = () => {
    setPasswordType((currentType) => {
      if (currentType === "password") {
        return "text";
      }
      if (currentType === "text") {
        return "password";
      }
    });
  };
  const showHideCnfPasswordHandler = () => {
    setCnfPasswordType((currentType) => {
      if (currentType === "password") {
        return "text";
      }
      if (currentType === "text") {
        return "password";
      }
    });
  };

  //STUDENT NAME VALIDATION
  const {
    enteredValue: enteredStudentFirstName,
    valueIsValid: studentFirstNameIsValid,
    valueChangeHandler: setStudentFirstName,
    inputWasTouchedHandler: studentFirstWasTouchedHandler,
    errorDisplay: studentFirstNameErrorDisplay,
  } = useInputValidation((str) => namePattern.test(str));
  const {
    enteredValue: enteredStudentMiddleName,
    valueChangeHandler: setStudentMiddleName,
    inputWasTouchedHandler: studentMiddleWasTouchedHandler,
    errorDisplay: studentMiddleNameErrorDisplay,
  } = useInputValidation((str) => namePattern.test(str));
  const {
    enteredValue: enteredStudentLastName,
    valueIsValid: studentLastNameIsValid,
    valueChangeHandler: setStudentLastName,
    inputWasTouchedHandler: studentLastWasTouchedHandler,
    errorDisplay: studentLastNameErrorDisplay,
  } = useInputValidation((str) => namePattern.test(str));

  //FATHER NAME VALIDATION
  const {
    enteredValue: enteredFatherFirstName,
    valueIsValid: fatherFirstNameIsValid,
    valueChangeHandler: setFatherFirstName,
    inputWasTouchedHandler: fatherFirstWasTouchedHandler,
    errorDisplay: fatherFirstNameErrorDisplay,
  } = useInputValidation((str) => namePattern.test(str));
  const {
    enteredValue: enteredFatherMiddleName,
    valueChangeHandler: setFatherMiddleName,
    inputWasTouchedHandler: fatherMiddleWasTouchedHandler,
    errorDisplay: fatherMiddleNameErrorDisplay,
  } = useInputValidation((str) => namePattern.test(str));
  const {
    enteredValue: enteredFatherLastName,
    valueIsValid: fatherLastNameIsValid,
    valueChangeHandler: setFatherLastName,
    inputWasTouchedHandler: fatherLastWasTouchedHandler,
    errorDisplay: fatherLastNameErrorDisplay,
  } = useInputValidation((str) => namePattern.test(str));

  //MOTHER NAME VALIDATION
  const {
    enteredValue: enteredMotherFirstName,
    valueIsValid: motherFirstNameIsValid,
    valueChangeHandler: setMotherFirstName,
    inputWasTouchedHandler: motherFirstWasTouchedHandler,
    errorDisplay: motherFirstNameErrorDisplay,
  } = useInputValidation((str) => namePattern.test(str));
  const {
    enteredValue: enteredMotherMiddleName,
    valueChangeHandler: setMotherMiddleName,
    inputWasTouchedHandler: motherMiddleWasTouchedHandler,
    errorDisplay: motherMiddleNameErrorDisplay,
  } = useInputValidation((str) => namePattern.test(str));
  const {
    enteredValue: enteredMotherLastName,
    valueIsValid: motherLastNameIsValid,
    valueChangeHandler: setMotherLastName,
    inputWasTouchedHandler: motherLastWasTouchedHandler,
    errorDisplay: motherLastNameErrorDisplay,
  } = useInputValidation((str) => namePattern.test(str));

  // DATE OF BIRTH VALIDATION
  const {
    enteredValue: enteredDateOfBirth,
    valueIsValid: dateOfBirthIsValid,
    valueChangeHandler: setDateOfBirth,
    inputWasTouchedHandler: dateOfBirthWasTouchedHandler,
    errorDisplay: dateOfBirthErrorDisplay,
  } = useInputValidation((str) => datePattern.test(str));

  // NATIONALITY VALIDATION
  const {
    enteredValue: selectedNationality,
    valueIsValid: nationalityIsValid,
    valueChangeHandler: setNationality,
    inputWasTouchedHandler: nationalityWasTouchedHandler,
    errorDisplay: nationalityErrorDisplay,
  } = useInputValidation((str) => nationPattern.test(str));

  // CLASS VALIDATION
  const {
    enteredValue: selectedClass,
    valueIsValid: classIsValid,
    valueChangeHandler: setClass,
    inputWasTouchedHandler: classWasTouchedHandler,
    errorDisplay: classErrorDisplay,
  } = useInputValidation((str) => classPattern.test(str));

  //EMAIL AND PASSWORD VALIDATION
  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    valueChangeHandler: setEmail,
    inputWasTouchedHandler: emailWasTouchedHandler,
    errorDisplay: emailErrorDisplay,
  } = useInputValidation((str) => emailPattern.test(str));
  const {
    enteredValue: enteredPassword,
    valueIsValid: passwordIsValid,
    valueChangeHandler: setPassword,
    inputWasTouchedHandler: passwordWasTouchedHandler,
    errorDisplay: passwordErrorDisplay,
  } = useInputValidation((str) => passwordPattern.test(str));
  const {
    enteredValue: enteredConfirmedPassword,
    valueIsValid: confirmedPasswordIsValid,
    valueChangeHandler: setConfirmedPassword,
    inputWasTouchedHandler: confirmedPasswordWasTouchedHandler,
    errorDisplay: confirmedPasswordErrorDisplay,
  } = useInputValidation((str) => str === enteredPassword);

  // PHOTO AND ID VALIDATION
  const {
    enteredValue: enteredPhotoObj,
    valueIsValid: photoObjIsValid,
    valueChangeHandler: setPhotoObj,
    inputWasTouchedHandler: photoWasTouchedHandler,
    errorDisplay: photoObjErrorDisplay,
  } = useInputValidationFile();
  const {
    enteredValue: enteredIDObj,
    valueIsValid: idObjIsValid,
    valueChangeHandler: setIdObj,
    inputWasTouchedHandler: idWasTouchedHandler,
    errorDisplay: idObjErrorDisplay,
  } = useInputValidationFile();

  // CONTACT AND COUNTRY CODE VALIDATION
  const {
    enteredValue: enteredCountryCode,
    valueIsValid: countryCodeIsValid,
    valueChangeHandler: setCountryCode,
    inputWasTouchedHandler: countryCodeWasTouchedHandler,
    errorDisplay: countryCodeErrorDisplay,
  } = useInputValidation((str) => countryCodepattern.test(str));
  const {
    enteredValue: enteredContact,
    valueIsValid: contactIsValid,
    valueChangeHandler: setContact,
    inputWasTouchedHandler: contactWasTouchedHandler,
    errorDisplay: contactErrorDisplay,
  } = useInputValidation((str) => contactPattern.test(str));

  // COMMENTS VALIDATION
  const {
    enteredValue: enteredComment,
    valueChangeHandler: setComment,
    inputWasTouchedHandler: commentWasTouchedHandler,
    errorDisplay: commentErrorDisplay,
  } = useInputValidation((str) => commentPattern.test(str));

  // ENTIRE FORM STATE
  const formIsValid =
    studentFirstNameIsValid &&
    studentLastNameIsValid &&
    fatherFirstNameIsValid &&
    fatherLastNameIsValid &&
    motherFirstNameIsValid &&
    motherLastNameIsValid &&
    dateOfBirthIsValid &&
    nationalityIsValid &&
    classIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmedPasswordIsValid &&
    photoObjIsValid &&
    idObjIsValid &&
    countryCodeIsValid &&
    contactIsValid &&
    lastConfirmationCheck;

  const cancelRegistrationHandler = () => {
    history.push("/login-page");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const userDataObj = {
      studentName: `${enteredStudentFirstName}${
        namePattern.test(enteredStudentMiddleName)
          ? ` ${enteredStudentMiddleName} `
          : " "
      }${enteredStudentLastName}`,
      fatherName: `${enteredFatherFirstName}${
        namePattern.test(enteredFatherMiddleName)
          ? ` ${enteredFatherMiddleName} `
          : " "
      }${enteredFatherLastName}`,
      motherName: `${enteredMotherFirstName}${
        namePattern.test(enteredMotherMiddleName)
          ? ` ${enteredMotherMiddleName} `
          : " "
      }${enteredMotherLastName}`,
      dateOfBirth: enteredDateOfBirth,
      nationality: selectedNationality,
      class: selectedClass,
      email: enteredEmail,
      confirmedPassword: enteredConfirmedPassword,
      photoURL: URL.createObjectURL(enteredPhotoObj),
      idURL: URL.createObjectURL(enteredIDObj),
      contact: `${enteredCountryCode}${enteredContact}`,
      comment: commentPattern.test(enteredComment) ? enteredComment : "",
    };

    const addUserObj = {
      email: enteredEmail,
      password: enteredConfirmedPassword,
      returnSecureToken: true,
    };

    if (formIsValid) {
      //ADDING USER DATA TO DATABASE
      axios
        .post(
          "https://ifvs-8e70a-default-rtdb.firebaseio.com/user-data.json",
          userDataObj
        )
        .then((responseObj) => {
          const studentId = responseObj.data.name;

          //ADDING NEW USER
          axios
            .post(
              "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxDe5NBOX90FK4vmxhFxedti1ovtRNdUQ",
              addUserObj
            )
            .then((responseObj) => {
              dispatch(
                modalSliceActions.displayModal({
                  identifier: "student-id-when-new-user-added",
                  studentId: studentId,
                })
              );
              history.replace("/login-page");
            })
            .catch((error) => {
              //console.log("error occured while adding new user.");
              setLoading(false);
              setError(true);
              dispatch(
                modalSliceActions.displayModal({
                  identifier: "add-user-error",
                })
              );
            });
        })
        .catch((error) => {
          setError(true);
          setLoading(false);
          dispatch(
            modalSliceActions.displayModal({
              identifier: "add-user-error",
            })
          );
          //console.log("error occured while adding user data object");
        });
    }
  };

  let submitButtonText = "Submit";
  if (loading) {
    submitButtonText = "authenticating..";
  }
  if (error) {
    submitButtonText = "Try again";
  }

  return (
    <Card className={styles.formCard}>
      <Prompt
        when={formIsTouched}
        message={(location) => "You want to leave the from unsaved ?"}
      />
      <form onFocus={formTouchedTrueHandler} onSubmit={submitHandler}>
        <SubHeader>Student's name</SubHeader>
        <Input
          id="STD_FIRST_NAME"
          type="text"
          onChange={setStudentFirstName}
          onBlur={studentFirstWasTouchedHandler}
          hasError={studentFirstNameErrorDisplay}
          errorMsg="Enter a valid name."
          label="First name* :"
          placeHolder="Enter first name"
          required={true}
        />
        <Input
          id="STD_MIDDLE_NAME"
          type="text"
          onChange={setStudentMiddleName}
          onBlur={studentMiddleWasTouchedHandler}
          hasError={studentMiddleNameErrorDisplay}
          errorMsg="Enter a valid middle name."
          label="Middle name :"
          placeHolder="Enter middle name"
          required={false}
        />
        <Input
          id="STD_LAST_NAME"
          type="text"
          onChange={setStudentLastName}
          onBlur={studentLastWasTouchedHandler}
          hasError={studentLastNameErrorDisplay}
          errorMsg="Enter a valid last name."
          label="Last name* :"
          placeHolder="Enter last name"
          required={true}
        />

        <hr />

        <SubHeader>Father's Name</SubHeader>
        <Input
          id="FTR_FIRST_NAME"
          type="text"
          onChange={setFatherFirstName}
          onBlur={fatherFirstWasTouchedHandler}
          hasError={fatherFirstNameErrorDisplay}
          errorMsg="Enter a valid first name."
          label="First name* :"
          placeHolder="Enter first name"
          required={true}
        />
        <Input
          id="FTR_MIDDLE_NAME"
          type="text"
          onChange={setFatherMiddleName}
          onBlur={fatherMiddleWasTouchedHandler}
          hasError={fatherMiddleNameErrorDisplay}
          errorMsg="Enter a valid middle name."
          label="Middle name :"
          placeHolder="Enter middle name"
          required={false}
        />
        <Input
          id="FTR_LAST_NAME"
          type="text"
          onChange={setFatherLastName}
          onBlur={fatherLastWasTouchedHandler}
          hasError={fatherLastNameErrorDisplay}
          errorMsg="Enter a valid last name."
          label="Last name* :"
          placeHolder="Enter last name"
          required={true}
        />

        <hr />

        <SubHeader>Mother's Name</SubHeader>
        <Input
          id="MTR_FIRST_NAME"
          type="text"
          onChange={setMotherFirstName}
          onBlur={motherFirstWasTouchedHandler}
          hasError={motherFirstNameErrorDisplay}
          errorMsg="Enter a valid first name."
          label="First name* :"
          placeHolder="Enter first name"
          required={true}
        />
        <Input
          id="MTR_MIDDLE_NAME"
          type="text"
          onChange={setMotherMiddleName}
          onBlur={motherMiddleWasTouchedHandler}
          hasError={motherMiddleNameErrorDisplay}
          errorMsg="Enter a valid middle name."
          label="Middle name :"
          placeHolder="Enter middle name"
          required={false}
        />
        <Input
          id="MTR_LAST_NAME"
          type="text"
          onChange={setMotherLastName}
          onBlur={motherLastWasTouchedHandler}
          hasError={motherLastNameErrorDisplay}
          errorMsg="Enter a valid last name."
          label="Last name* :"
          placeHolder="Enter last name"
          required={true}
        />

        <hr />

        <SubHeader>Date of Birth</SubHeader>
        <Input
          id="STD_DOB"
          type="date"
          onChange={setDateOfBirth}
          onBlur={dateOfBirthWasTouchedHandler}
          hasError={dateOfBirthErrorDisplay}
          errorMsg="Enter a valid date."
          label="Date of birth* :"
          subLabel="(we have no age boundation.)"
          required={true}
        />

        <hr />

        <SubHeader>Nationality</SubHeader>
        <SelectNationality
          onChange={setNationality}
          onBlur={nationalityWasTouchedHandler}
          hasError={nationalityErrorDisplay}
          required={true}
          errorMsg="select a valid country."
        />

        <hr />

        <SubHeader>Class</SubHeader>
        <SelectClass
          onChange={setClass}
          onBlur={classWasTouchedHandler}
          hasError={classErrorDisplay}
          required={true}
          errorMsg="select a valid class."
        />

        <hr />

        <SubHeader>Email and password</SubHeader>
        <Input
          id="STD_EMAIL"
          type="email"
          onChange={setEmail}
          onBlur={emailWasTouchedHandler}
          hasError={emailErrorDisplay}
          errorMsg="Enter a valid email."
          label="Email* :"
          required={true}
        />
        <Input
          id="STD_PASSWORD"
          type={passwordType}
          onChange={setPassword}
          showDisplayPasswordIcon={true}
          showHidePasswordHandler={showHidePasswordHandler}
          onBlur={passwordWasTouchedHandler}
          hasError={passwordErrorDisplay}
          errorMsg="Password must be 6 characters long or more."
          label="Password* :"
          subLabel="(use letters, numbers and symbols combination for strong password. )"
          required={true}
        />
        {passwordIsValid && (
          <Input
            id="STD_CONFIRM_PASSWORD"
            type={cnfPasswordType}
            showDisplayPasswordIcon={true}
            showHidePasswordHandler={showHideCnfPasswordHandler}
            onChange={setConfirmedPassword}
            onBlur={confirmedPasswordWasTouchedHandler}
            hasError={confirmedPasswordErrorDisplay}
            errorMsg="Password not matched"
            label="Confirm Password* :"
            required={true}
          />
        )}

        <hr />

        <SubHeader>Photo and ID</SubHeader>
        <Input
          id="STD_PHOTO"
          type="file"
          onChange={setPhotoObj}
          onBlur={photoWasTouchedHandler}
          hasError={photoObjErrorDisplay}
          errorMsg="Select a valid file."
          accept="image/jpg,image/png,image/jpeg"
          label="Photo* :"
          subLabel="(jpg/png)"
          required={true}
        />
        <Input
          id="STD_ID"
          type="file"
          onChange={setIdObj}
          onBlur={idWasTouchedHandler}
          hasError={idObjErrorDisplay}
          errorMsg="Select a valid file."
          accept=".pdf"
          label="ID* :"
          subLabel="(pdf)"
          required={true}
        />

        <hr />

        <SubHeader>Contact Number</SubHeader>
        <SelectCountryCode
          onChange={setCountryCode}
          onBlur={countryCodeWasTouchedHandler}
          hasError={countryCodeErrorDisplay}
          required={true}
          errorMsg="select a valid country code."
        />
        <Input
          id="STD_CONTACT"
          type="text"
          onChange={setContact}
          onBlur={contactWasTouchedHandler}
          hasError={contactErrorDisplay}
          errorMsg="Enter a valid phone number."
          label="Phone* :"
          subLabel="(Parent's)"
          required={true}
        />

        <hr />

        <SubHeader>Comments</SubHeader>
        <TextArea
          id="STD_COMMENTS"
          rows="3"
          onChange={setComment}
          onBlur={commentWasTouchedHandler}
          hasError={commentErrorDisplay}
          label="Comments :"
          errorMsg="Comments must be 10 characters long or more."
          placeHolder="like why are you taking this course ? , who suggested you this course ? . We'll love to hear from you."
          required={false}
        />

        <hr />

        <CheckBoxInput
          id="STD_CONFIRMATION"
          label="All information provided by me is correct."
          required={true}
          onClick={confirmationToggleHandler}
        />

        <hr />
        <FormButtonGroup
          submitDisable={!formIsValid}
          submitButtonText={submitButtonText}
          onCancel={cancelRegistrationHandler}
          onClickOnSubmitButton={formTouchedFalseHandler}
        />
      </form>
    </Card>
  );
};
export default FormCard;
