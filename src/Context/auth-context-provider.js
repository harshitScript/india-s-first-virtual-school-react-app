import AuthContext from "./auth-context";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userDataObjectSliceActions } from "../ReduxStore/user-data-object-slice";
import userDataObjectSliceThunk from "../ReduxStore/user-data-object-thunk";
import { profilePictureDownloadThunkHandler } from "../ReduxStore/profile-picture-thunk-handler";
import { profilePictureSliceActions } from "../ReduxStore/profile-picture-slice";

const AuthContextProvider = (props) => {
  // HOOKS
  const dispatch = useDispatch();

  // LOCAL STORAGE CONSTANTS
  const idTokenIfAvailable = localStorage.getItem("idToken");
  const currentAuthorizedEmailIfAvailable = localStorage.getItem(
    "currentAuthorizedEmail"
  );
  const profilePictureSrcIfAvailable =
    localStorage.getItem("profilePictureSrc");

  if (profilePictureSrcIfAvailable) {
    dispatch(
      profilePictureSliceActions.setProfilePicture(profilePictureSrcIfAvailable)
    );
  }

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

  const loginHandler = (idToken, currentActiveEmail) => {
    setIsAuthenticated(true);
    setIdToken(idToken);
    localStorage.setItem("idToken", idToken);
    localStorage.setItem("currentAuthorizedEmail", currentActiveEmail); // SETTING LOCAL STORAGE TO KNOW THE ACTIVE EMAIL.
    dispatch(userDataObjectSliceThunk(currentActiveEmail)); //FETCH THE USER DATA BASED ON EMAIL.
    dispatch(profilePictureDownloadThunkHandler(currentActiveEmail)); //PROFILE PICTURE DOWNLOAD
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
    setIdToken("");
    localStorage.removeItem("idToken");
    localStorage.removeItem("currentAuthorizedEmail");
    dispatch(
      userDataObjectSliceActions.setUserDataAndCurrentUserAndProfileImageToEmpty()
    );
    localStorage.removeItem("profilePictureSrc");
    dispatch(profilePictureSliceActions.removeProfilePicture());
  };

  const updateIdToken = (newIdToken) => {
    setIdToken(newIdToken);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        idToken: idToken,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
        updateIdToken: updateIdToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
