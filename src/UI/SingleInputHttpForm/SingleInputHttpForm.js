import axios from "axios";
import { useRef, useState } from "react";
import useInputValidation from "../../Hooks/use-input-validation";
import SimpleButton from "../Button/SimpleButton";
import Input from "../Input/Input";
import styles from "./SingleInputHttpForm.module.css";

const SingleInputHttpForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const inputRef = useRef();

  const {
    pattern,
    url,
    payloadObjectGenerator,
    inputType,
    placeholder,
    errorMsg,
    formType,
    id,
    requestType,
    addtionalFunctionalityOnSucess,
    addtionalFunctionalityOnError,
    passwordDisplayIcon,
    showHidePasswordHandler,
  } = props;

  const {
    enteredValue,
    valueIsValid,
    valueChangeHandler,
    inputWasTouchedHandler,
    errorDisplay,
  } = useInputValidation((str) => pattern.test(str));

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (valueIsValid) {
      if (requestType === "POST") {
        setLoading(true);
        setError(false);
        axios
          .post(url, payloadObjectGenerator(enteredValue))
          .then((responseObj) => {
            const onSuccess = () => {
              setLoading(false);
              setError(false);
              inputRef.current.value = "";
            };

            addtionalFunctionalityOnSucess(enteredValue, onSuccess);
          })
          .catch((error) => {
            setLoading(false);
            setError(true);
            addtionalFunctionalityOnError();
          });
      }

      if (requestType === "PUT") {
        setLoading(true);
        setError(false);
        axios
          .put(url, payloadObjectGenerator(enteredValue))
          .then((responseObj) => {
            setLoading(false);
            setError(false);
            inputRef.current.value = "";
            addtionalFunctionalityOnSucess(enteredValue);
          })
          .catch((error) => {
            setLoading(false);
            setError(true);

            addtionalFunctionalityOnError();
          });
      }
    }
  };

  //BUTTONTEXT SELECTOR
  let buttonText = formType;
  if (loading) {
    buttonText = "wait...";
  }
  if (error) {
    buttonText = "Try again..";
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <Input
        onChange={valueChangeHandler}
        onBlur={inputWasTouchedHandler}
        type={inputType}
        placeHolder={placeholder}
        label={formType}
        id={id}
        required={true}
        hasError={errorDisplay}
        errorMsg={errorMsg}
        ref={inputRef}
        showHidePasswordHandler={showHidePasswordHandler}
        showDisplayPasswordIcon={passwordDisplayIcon}
      />
      <div className={styles.buttonFlexDiv}>
        <SimpleButton type="submit" className={styles.button}>
          {buttonText}
        </SimpleButton>
      </div>
    </form>
  );
};
export default SingleInputHttpForm;
