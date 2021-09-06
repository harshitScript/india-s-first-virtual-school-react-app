import AuthContext from "./auth-context";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userDataObjectSliceActions } from "../ReduxStore/user-data-object-slice";
import userDataObjectSliceThunk from "../ReduxStore/user-data-object-thunk";

const AuthContextProvider = (props) => {
  // HOOKS
  const dispatch = useDispatch();

  // LOCAL STORAGE CONSTANTS
  const idTokenIfAvailable = localStorage.getItem("idToken");
  const currentAuthorizedEmailIfAvailable = localStorage.getItem(
    "currentAuthorizedEmail"
  );

  let initialIdTokenState;
  let initialIsAuthenticatedState;

  // LOGIN(when we start the application[initially] before expiration time)
  if (idTokenIfAvailable) {
    initialIdTokenState = idTokenIfAvailable;
    initialIsAuthenticatedState = true;
    dispatch(userDataObjectSliceThunk(currentAuthorizedEmailIfAvailable));
  }
  // LOGOUT(when we start the application[initially])
  if (idTokenIfAvailable === undefined) {
    initialIdTokenState = "";
    initialIsAuthenticatedState = false;
    localStorage.removeItem("idToken");
    localStorage.removeItem("currentAuthorizedEmail");
    dispatch(
      userDataObjectSliceActions.setUserDataAndCurrentUserAndProfileImageToEmpty()
    );
  }

  // GLOBAL STATES
  const [isAuthenticated, setIsAuthenticated] = useState(
    initialIsAuthenticatedState
  );
  const [idToken, setIdToken] = useState(initialIdTokenState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loginHandler = (idToken, currentActiveEmail) => {
    setIsAuthenticated(true);
    setIdToken(idToken);
    localStorage.setItem("idToken", idToken);
    localStorage.setItem("currentAuthorizedEmail", currentActiveEmail); // SETTING LOCAL STORAGE TO KNOW THE ACTIVE EMAIL.
    dispatch(userDataObjectSliceThunk(currentActiveEmail)); //FETCH THE USER DATA BASED ON EMAIL.
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
    setIdToken("");
    localStorage.removeItem("idToken");
    localStorage.removeItem("currentAuthorizedEmail");
    dispatch(
      userDataObjectSliceActions.setUserDataAndCurrentUserAndProfileImageToEmpty()
    );
  };

  const updateIdToken = (newIdToken) => {
    setIdToken(newIdToken);
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
        updateIdToken: updateIdToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
