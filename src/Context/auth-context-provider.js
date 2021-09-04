import AuthContext from "./auth-context";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userDataObjectSliceActions } from "../ReduxStore/user-data-object-slice";
import userDataObjectSliceThunk from "../ReduxStore/user-data-object-thunk";
const date = new Date();
const currentTimeInMiliSeconds = date.getTime();

const AuthContextProvider = (props) => {
  // HOOKS
  const dispatch = useDispatch();

  // LET VARIABLES
  let remainingTimeInMiliseconds;
  let autoLogoutTimer1;
  let autoLogoutTimer2;

  // LOCAL STORAGE CONSTANTS
  const idTokenIfAvailable = localStorage.getItem("idToken");
  const expirationTimeInMiliSecondsIfAvailable =
    localStorage.getItem("expiration-time");
  const currentAuthorizedEmailIfAvailable = localStorage.getItem(
    "currentAuthorizedEmail"
  );

  // REMAINING TIME GENERATOR
  if (expirationTimeInMiliSecondsIfAvailable) {
    remainingTimeInMiliseconds =
      expirationTimeInMiliSecondsIfAvailable - currentTimeInMiliSeconds;
  }

  let initialIdTokenState;
  let initialIsAuthenticatedState;

  // LOGOUT(when we start the application[initially] after expiration time)
  if (remainingTimeInMiliseconds < 0) {
    initialIdTokenState = "";
    initialIsAuthenticatedState = false;
    localStorage.removeItem("idToken");
    localStorage.removeItem("expiration-time");
    localStorage.removeItem("currentAuthorizedEmail");
    dispatch(
      userDataObjectSliceActions.setUserDataAndCurrentUserAndProfileImageToEmpty()
    );
  }

  // LOGIN(when we start the application[initially] before expiration time)
  if (remainingTimeInMiliseconds > 0) {
    initialIdTokenState = idTokenIfAvailable;
    initialIsAuthenticatedState = true;
    dispatch(userDataObjectSliceThunk(currentAuthorizedEmailIfAvailable));
  }

  // GLOBAL STATES
  const [isAuthenticated, setIsAuthenticated] = useState(
    initialIsAuthenticatedState
  );
  const [idToken, setIdToken] = useState(initialIdTokenState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //LOGOUT US AUTOMATICALLY.
  if (remainingTimeInMiliseconds > 0) {
    autoLogoutTimer1 = setTimeout(() => {
      setIsAuthenticated(false);
      setIdToken("");
      localStorage.removeItem("idToken");
      localStorage.removeItem("expiration-time");
      localStorage.removeItem("currentAuthorizedEmail");
      dispatch(
        userDataObjectSliceActions.setUserDataAndCurrentUserAndProfileImageToEmpty()
      );
    }, remainingTimeInMiliseconds);
  }

  const expirationTimeGenerater = (tokenValidityInSeconds) => {
    const tokenValidityInMiliSeconds = tokenValidityInSeconds * 1000;

    const expirationTime =
      tokenValidityInMiliSeconds + currentTimeInMiliSeconds;

    return expirationTime;
  };

  const loginHandler = (
    idToken,
    idTokenValidityInSeconds,
    currentActiveEmail
  ) => {
    setIsAuthenticated(true);
    setIdToken(idToken);
    localStorage.setItem(
      "expiration-time",
      expirationTimeGenerater(idTokenValidityInSeconds)
    );
    localStorage.setItem("idToken", idToken);

    //FETCH THE USER DATA BASED ON EMAIL.
    dispatch(userDataObjectSliceThunk(currentActiveEmail));

    // SETTING LOCAL STORAGE TO KNOW THE ACTIVE EMAIL.
    localStorage.setItem("currentAuthorizedEmail", currentActiveEmail);

    //LOGOUT US AUTOMATICALLY.
    autoLogoutTimer2 = setTimeout(() => {
      setIsAuthenticated(false);
      setIdToken("");
      localStorage.removeItem("idToken");
      localStorage.removeItem("expiration-time");
      localStorage.removeItem("currentAuthorizedEmail");
      dispatch(
        userDataObjectSliceActions.setUserDataAndCurrentUserAndProfileImageToEmpty()
      );
    }, idTokenValidityInSeconds * 1000);
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
    setIdToken("");
    localStorage.removeItem("idToken");
    localStorage.removeItem("expiration-time");
    localStorage.removeItem("currentAuthorizedEmail");
    clearTimeout(autoLogoutTimer1);
    clearTimeout(autoLogoutTimer2);
    dispatch(
      userDataObjectSliceActions.setUserDataAndCurrentUserAndProfileImageToEmpty()
    );
  };

  const setLoadingToTrue = () => {
    setLoading(true);
  };
  const setLoadingToFalse = () => {
    setLoading(false);
  };
  const setErrorToTrue = () => {
    setError(true);
  };
  const setErrorToFalse = () => {
    setError(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        idToken: idToken,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
        loading: loading,
        error: error,
        setLoadingToTrue: setLoadingToTrue,
        setLoadingToFalse: setLoadingToFalse,
        setErrorToTrue: setErrorToTrue,
        setErrorToFalse: setErrorToFalse,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
