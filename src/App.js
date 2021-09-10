// APP COMPONENT RENDERED EACHB TIME THE ROUTE CHANGES ,  NO MATTER ITS MAIN ROUTE OR SUB ROUTE.

import { lazy, Suspense } from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./Context/auth-context";
import Footer from "./UI/Footer";
import Modal from "./Components/Modal/Modal";
import LoadingPageFallbackJSX from "./UI/LoadingPageFallbackJSX";
import EditPersonalDetailsPage from "./Pages/EditPersonalDetailsPage/EditPersonalDetailsPage";
//import HomePage from "./Pages/HomePage/HomePage";
//import AboutPage from "./Pages/AboutPage/AboutPage";
//import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
//import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
//import ClassDetailsPage from "./Pages/ClassDetailsPage/ClassDetailsPage";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
//import LoginPage from "./Pages/LoginPage/LoginPage";
//import CoursePage from "./Pages/CoursePage/CoursePage";
//import ChangeEmailPasswordPage from "./Pages/ChangeEmailPasswordPage/ChangeEmailPasswordPage";

// LAZY LOADING IMPORT
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./Pages/AboutPage/AboutPage"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage/NotFoundPage"));
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const ClassDetailsPage = lazy(() =>
  import("./Pages/ClassDetailsPage/ClassDetailsPage")
);
const RegistrationPage = lazy(() =>
  import("./Pages/RegistrationPage/RegistrationPage")
);
const CoursePage = lazy(() => import("./Pages/CoursePage/CoursePage"));
const ChangeEmailPasswordPage = lazy(() =>
  import("./Pages/ChangeEmailPasswordPage/ChangeEmailPasswordPage")
);

function App() {
  const location = useLocation();
  const authCtx = useContext(AuthContext);
  const isAuthenticated = authCtx.isAuthenticated;

  /*
  // CHECKING THE USERS ONLINE STATUS(when application loads initially).
  if (window.navigator.online === false) {
    const confirmation = window.confirm(
      "Do you wanna use offline mode ? many features may not work"
    );
    if (confirmation) {
      alert("Offline mode activated !");
    } else {
      window.close();
    }
  }
  */

  return (
    <>
      <NavigationBar />

      {/*<TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={{
            enter: 500,
            exit: 500,
          }}
          classNames={{
            enter: "",
            enterActive: "enter",
            enterDone: "",
            exit: "exit",
            exitActive: "",
            exitDone: "",
          }}
        >*/}
      <Suspense fallback={<LoadingPageFallbackJSX />}>
        <Switch location={location}>
          <Route path="/" exact>
            <Redirect to="/home-page" />
          </Route>
          <Route path="/home-page">
            <HomePage />
          </Route>
          <Route path="/about-page">
            <AboutPage />
          </Route>
          <Route path="/class-details/:classGroup/:standard">
            <ClassDetailsPage />
          </Route>
          <Route path="/login-page">
            {isAuthenticated ? <Redirect to="/home-page" /> : <LoginPage />}
          </Route>
          <Route path="/register-user-page">
            {isAuthenticated ? (
              <Redirect to="/home-page" />
            ) : (
              <RegistrationPage />
            )}
          </Route>
          <Route path="/course-page">
            {isAuthenticated ? <CoursePage /> : <Redirect to="/home-page" />}
          </Route>
          <Route path="/change-email-password-page">
            {isAuthenticated ? (
              <ChangeEmailPasswordPage />
            ) : (
              <Redirect to="/home-page" />
            )}
          </Route>
          <Route path="/edit-personal-details-page">
            {isAuthenticated ? (
              <EditPersonalDetailsPage />
            ) : (
              <Redirect to="/home-page" />
            )}
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>

      {/*</CSSTransition>
      </TransitionGroup>*/}

      <Footer />

      {/* CSSTRANSITION ELEMENT IS DISPLAYING/HIDING MODAL CONDITIONALLY IN COMPONENT FUNCTION */}
      <Modal />
    </>
  );
}

export default App;
