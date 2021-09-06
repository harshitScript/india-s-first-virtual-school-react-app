import { createContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  idToken: "",
  loginHandler: (idToken, idTokenValidityInSeconds, currentActiveEmail) => {},
  logoutHandler: () => {},
  updateIdToken: (newIdToken) => {},
});

export default AuthContext;
