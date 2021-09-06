import styles from "./Feedback.module.css";
import Input from "../../../../UI/Input/Input";
import SimpleButton from "../../../../UI/Button/SimpleButton";
import Card from "../../../../UI/Card";
import useInputValidation from "../../../../Hooks/use-input-validation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { modalSliceActions } from "../../../../ReduxStore/modal-slice";
import { useState, useRef } from "react";
import { useContext } from "react";
import AuthContext from "../../../../Context/auth-context";
import { useSelector } from "react-redux";

const feedbackPattern = /[\S]+$/;
const Feedback = () => {
  const feedbackInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const authCtx = useContext(AuthContext);
  const isAuthenticated = authCtx.isAuthenticated;
  const dispatch = useDispatch();
  const [studentName, currentActiveEmail] = useSelector((state) => [
    state.userData.currentUserObject.studentName,
    state.userData.currentUserObject.email,
  ]);
  const {
    enteredValue: enteredFeedback,
    valueIsValid: feedbackIsValid,
    valueChangeHandler: setFeedback,
    inputWasTouchedHandler: feedbackWasTouchedHandler,
    errorDisplay: feedbackErrorDisplay,
  } = useInputValidation((str) => feedbackPattern.test(str));

  // TYPE OF FEEDBACK SELECTOR
  let url;
  let objectToStore;
  let placeHolderText;
  if (isAuthenticated) {
    url = "https://ifvs-8e70a-default-rtdb.firebaseio.com/named-feedbacks.json";
    objectToStore = {
      feedback: enteredFeedback,
      studentName: studentName,
      email: currentActiveEmail,
    };
    placeHolderText = "Named feedback...";
  } else {
    url =
      "https://ifvs-8e70a-default-rtdb.firebaseio.com/anonymous-feedbacks.json";
    objectToStore = {
      feedback: enteredFeedback,
    };
    placeHolderText = "Anonymous feedback..";
  }

  const feedbackSubmitHandler = (e) => {
    e.preventDefault();

    if (feedbackIsValid) {
      setLoading(true);
      setError(false);
      axios
        .post(url, objectToStore)
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
            placeHolder={placeHolderText}
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
