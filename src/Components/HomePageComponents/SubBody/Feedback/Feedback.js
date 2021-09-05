import styles from "./Feedback.module.css";
import Input from "../../../../UI/Input/Input";
import SimpleButton from "../../../../UI/Button/SimpleButton";
import Card from "../../../../UI/Card";
import useInputValidation from "../../../../Hooks/use-input-validation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { modalSliceActions } from "../../../../ReduxStore/modal-slice";
import { useState, useRef } from "react";

const feedbackPattern = /[\S]+$/;
const Feedback = () => {
  const feedbackInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const {
    enteredValue: enteredFeedback,
    valueIsValid: feedbackIsValid,
    valueChangeHandler: setFeedback,
    inputWasTouchedHandler: feedbackWasTouchedHandler,
    errorDisplay: feedbackErrorDisplay,
  } = useInputValidation((str) => feedbackPattern.test(str));

  const feedbackSubmitHandler = (e) => {
    e.preventDefault();

    if (feedbackIsValid) {
      setLoading(true);
      setError(false);
      axios
        .post("https://ifvs-8e70a-default-rtdb.firebaseio.com/feedback.json", {
          feedback: enteredFeedback,
        })
        .then((responseObj) => {
          dispatch(
            modalSliceActions.displayModal({
              identifier: "feedback-successfull",
            })
          );
          setLoading(false);
          setError(false);
          feedbackInputRef.current.value = "";
        })
        .catch((error) => {
          dispatch(
            modalSliceActions.displayModal({
              identifier: "feedback-error",
            })
          );
          setError(true);
          setLoading(false);
        });
    }
  };

  let buttonText = "Submit";
  if (loading) {
    buttonText = "wait..";
  }
  if (error) {
    buttonText = "Try again";
  }

  return (
    <>
      <span className={styles.headerSpan}>Feedback</span>

      <Card className={styles.feedbackCard}>
        <form onSubmit={feedbackSubmitHandler}>
          <Input
            ref={feedbackInputRef}
            onChange={setFeedback}
            onBlur={feedbackWasTouchedHandler}
            type="text"
            placeHolder="anonymous feedback.."
            required={true}
            errorMsg="Feedback cannot be blank."
            hasError={feedbackErrorDisplay}
          />
          <SimpleButton type="submit">{buttonText}</SimpleButton>
        </form>
      </Card>
    </>
  );
};
export default Feedback;
