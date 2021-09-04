import { createContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  idToken: "",
  loading: false,
  error: false,
  loginHandler: (idToken, idTokenValidityInSeconds, currentActiveEmail) => {},
  logoutHandler: () => {},
  setLoadingToTrue: () => {},
  setLoadingToFalse: () => {},
  setErrorToTrue: () => {},
  setErrorToFalse: () => {},
});

export default AuthContext;
