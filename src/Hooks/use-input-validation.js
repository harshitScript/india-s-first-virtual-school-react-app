import { useState } from "react";
const useInputValidation = (checkPattern) => {
  const [enteredValue, setEnteredValue] = useState("");
  const valueIsValid = checkPattern(enteredValue);
  const [inputWasTouched, setInputWasTouched] = useState(false);

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputWasTouchedHandler = () => {
    setInputWasTouched(true);
  };

  const errorDisplay = inputWasTouched && !valueIsValid;

  return {
    enteredValue,
    valueIsValid,
    valueChangeHandler,
    inputWasTouchedHandler,
    errorDisplay,
  };
};
export default useInputValidation;
