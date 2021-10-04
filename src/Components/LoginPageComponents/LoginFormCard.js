// THIS FORM HAS VALIDATION ON SUBMIT METHOD.
// THIS FROM ACTS AS A LOGIN FROM(when we are not authenticated) AND AS A CONFIRMATION FORM(when we are authenticated. )

import Card from "../../UI/Card";
import styles from "./LoginFormCard.module.css";
import { useRef, useState, useContext } from "react";
import axios from "axios";
import { useHistory, Prompt } from "react-router-dom";
import AuthContext from "../../Context/auth-context";
import { useDispatch } from "react-redux";
import { modalSliceActions } from "../../ReduxStore/modal-slice";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { useSelector } from "react-redux";

const emailPattern = /^(www.)?[a-zA-Z0-9.-]{0,}@[a-z]{3,6}.(com|co|org|in)$/;
const passwordPattern = /^[\S]{6,}$/;

const LoginFormCard = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = authCtx.isAuthenticated;

  //GLOBAL STATES
  const currentActiveEmail = useSelector(
    (state) => state.userData.currentUserObject.email
  );

  // LO0CAL STATES
  const [formIsTouched, setFormIsTouched] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // PROPS DESTRUCTURING
  const { additionalFunctionality, displayInfoText, displayNewUserButton } =
    props;

  // SHOW/HIDE PASSWORD MECHANISM.
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
  let passwordIconToDisplay;
  if (passwordType === "password") {
    passwordIconToDisplay = (
      <FaEye
        className={styles.passwordIcon}
        onClick={showHidePasswordHandler}
      />
    );
  }
  if (passwordType === "text") {
    passwordIconToDisplay = (
      <FaEyeSlash
        className={styles.passwordIcon}
        onClick={showHidePasswordHandler}
      />
    );
  }

  const registerUserHandler = () => {
    history.push("/register-user-page");
  };

  const promptWillDisplayHandler = () => {
    setFormIsTouched(true);
  };
  const promptWillNotDisplayHandler = () => {
    setFormIsTouched(false);
  };

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (!emailPattern.test(enteredEmail)) {
      setEmailIsValid(false);
      return;
    }
    if (!passwordPattern.test(enteredPassword)) {
      setPasswordIsValid(false);
      return;
    }

    // MAKING SURE THE USER ENTER CURRENT-AUTHORIZED-EMAIL IN CONFIRMATION LOGIN FORM.
    if (isAuthenticated) {
      if (currentActiveEmail !== enteredEmail) {
        dispatch(
          modalSliceActions.displayModal({
            identifier: "confirmation-login-form-email-mismatched",
          })
        );
        return;
      }
    }

    setLoading(true);
    setError(false);
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxDe5NBOX90FK4vmxhFxedti1ovtRNdUQ",
        {
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }
      )
      .then((responseObj) => {
        // FOR CONFIRMATION LOGIN FORM
        if (currentActiveEmail) {
          //console.log("idtoken updated.");
          authCtx.updateIdToken(responseObj.data.idToken);
        }

        // FOR AUTHENTICATION LOGIN FORM
        if (currentActiveEmail === undefined) {
          authCtx.loginHandler(responseObj.data.idToken, enteredEmail);
        }

        additionalFunctionality();
      })
      .catch((error) => {
        dispatch(
          modalSliceActions.displayModal({
            identifier: "auth-error",
          })
        );
        setError(true);
        setLoading(false);
      });
  };

  let buttonText = `login`;
  if (loading) {
    buttonText = "authenticating...";
  }
  if (!loading && error) {
    buttonText = "Try again";
  }

  return (
    <>
      <Prompt
        when={formIsTouched}
        message={(location) => "Leave the form unsaved ?"}
      />
      <Card className={styles.formCard}>
        <form
          onFocus={promptWillDisplayHandler}
          onSubmit={loginFormSubmitHandler}
        >
          <div className={styles.formGroup}>
            <input
              ref={emailRef}
              type="email"
              placeholder="enter email"
              name="email"
              required
            />
            {!emailIsValid && (
              <span>
                <BiErrorCircle /> &nbsp;enter a valid email.
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <input
              ref={passwordRef}
              type={passwordType}
              placeholder="enter password"
              name="password"
              required
            />
            {passwordIconToDisplay}
            {!passwordIsValid && (
              <span>
                <BiErrorCircle /> &nbsp;password must be 6 characters long or
                more.
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <button onClick={promptWillNotDisplayHandler} type="submit">
              {buttonText}
            </button>
          </div>
        </form>

        {displayNewUserButton && (
          <div className={styles.newUserButtonDiv}>
            <span>OR</span>

            <div className={styles.formGroup}>
              <button type="button" onClick={registerUserHandler}>
                New User
              </button>
            </div>
          </div>
        )}
        {displayInfoText && (
          <span className={styles.infoText}>
            <BsInfoCircle />
            &nbsp;
            {props.infoText}
          </span>
        )}
      </Card>
    </>
  );
};
export default LoginFormCard;
