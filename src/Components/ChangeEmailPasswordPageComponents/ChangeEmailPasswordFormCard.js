// THE HTTP REQUEST INSIDE THE SingleInputHttpForm IS SHOWING ERROR EVEN AFTER SUCCESFULLY CHNAGING THE EMAIL/PASSWORD.

import Card from "../../UI/Card";
import SingleInputHttpForm from "../../UI/SingleInputHttpForm/SingleInputHttpForm";
import styles from "./ChangeEmailPasswordFormCard.module.css";
import { useContext, useState } from "react";
import AuthContext from "../../Context/auth-context";
import { useDispatch, useSelector } from "react-redux";
import { modalSliceActions } from "../../ReduxStore/modal-slice";
import { useHistory } from "react-router";
import axios from "axios";
import updatedUserDataObjGenerator from "../../HelperFunctions/updated-user-data-object-generator";

const ChangeEmailPasswordFormCard = () => {
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const [passwordType, setPasswordType] = useState("password");
  const [userDataObj, currentUserObject] = useSelector((state) => [
    state.userData.userDataObj,
    state.userData.currentUserObject,
  ]);

  // PASSWORD HIDE DISPLAY MECHANISM.
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

  //PAYLOAD OBJECTS GENERETOR
  const passwordPayloadObjectGenerator = (enteredNewPassword) => {
    return {
      idToken: authCtx.idToken,
      password: enteredNewPassword,
      returnSecureToken: true,
    };
  };
  const emailPayloadObjectGenerator = (enteredNewEmail) => {
    return {
      idToken: authCtx.idToken,
      email: enteredNewEmail,
      returnSecureToken: true,
    };
  };

  // CHNAGE FAILURE HANDLER
  const emailChangeErrorHandler = () => {
    dispatch(
      modalSliceActions.displayModal({
        identifier: "email-change-error",
      })
    );
  };
  const passwordChangeErrorHandler = () => {
    dispatch(
      modalSliceActions.displayModal({
        identifier: "password-change-error",
      })
    );
  };

  // CURRENT USER-OBJECT ID & PUT OBJECT GENERATOR
  const currentUserId = currentUserObject.id;

  // CHANGE SUCCESS HANDLER
  const emailSucessHandler = (newEmail, onSuccess) => {
    axios
      .put(
        `https://ifvs-8e70a-default-rtdb.firebaseio.com/user-data.json`,
        updatedUserDataObjGenerator(
          userDataObj,
          currentUserId,
          "email",
          newEmail
        )
      )
      .then((responseObj) => {
        dispatch(
          modalSliceActions.displayModal({
            identifier: "email-changed-success",
            whatIsChanged: "Email",
          })
        );
        onSuccess();
        authCtx.logoutHandler();
        history.replace("/login-page");
      })
      .catch((error) => {
        emailChangeErrorHandler();
      });
  };
  const passwordSucessHandler = (newPassword, onSuccess) => {
    axios
      .put(
        `https://ifvs-8e70a-default-rtdb.firebaseio.com/user-data.json`,
        updatedUserDataObjGenerator(
          userDataObj,
          currentUserId,
          "confirmedPassword",
          newPassword
        )
      )
      .then((responseObj) => {
        dispatch(
          modalSliceActions.displayModal({
            identifier: "password-changed-success",
            whatIsChanged: "Password",
          })
        );
        onSuccess();
        authCtx.logoutHandler();
        history.replace("/login-page");
      })
      .catch((error) => {
        console.log("Error occured while updating user data object for email.");
        emailChangeErrorHandler();
      });
  };

  return (
    <Card className={styles.changeEmailPasswordFormCard}>
      <SingleInputHttpForm
        formType="Change Email"
        placeholder="Enter new email"
        url="https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDxDe5NBOX90FK4vmxhFxedti1ovtRNdUQ"
        pattern={/^(www.)?[a-zA-Z0-9.-]{0,}@[a-z]{3,6}.(com|co|org|in)$/}
        inputType="email"
        errorMsg="Enter a valid email."
        id="STD_NEW_EMAIL"
        requestType="POST"
        payloadObjectGenerator={emailPayloadObjectGenerator}
        addtionalFunctionalityOnSucess={emailSucessHandler}
        addtionalFunctionalityOnError={emailChangeErrorHandler}
      />
      <SingleInputHttpForm
        formType="Change Password"
        placeholder="Enter new password"
        url="https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDxDe5NBOX90FK4vmxhFxedti1ovtRNdUQ"
        pattern={/^[\S]{6,}$/}
        inputType={passwordType}
        errorMsg="Enter a valid password."
        id="STD_NEW_PASSWORD"
        requestType="POST"
        payloadObjectGenerator={passwordPayloadObjectGenerator}
        addtionalFunctionalityOnSucess={passwordSucessHandler}
        passwordDisplayIcon={true}
        showHidePasswordHandler={showHidePasswordHandler}
        addtionalFunctionalityOnError={passwordChangeErrorHandler}
      />
    </Card>
  );
};
export default ChangeEmailPasswordFormCard;
