import { useState } from "react";
const useInputValidationFile = () => {
  const [enteredValue, setEnteredValue] = useState(undefined);
  const valueIsValid = enteredValue !== undefined;
  const [inputWasTouched, setInputWasTouched] = useState(false);

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.files[0]);
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
export default useInputValidationFile;
