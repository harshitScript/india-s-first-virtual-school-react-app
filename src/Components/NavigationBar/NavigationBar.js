import styles from "./NavigationBar.module.css";
import ifvsLogo from "../../Assets/ifvslogo.jpg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Context/auth-context";
import { BiLogOut } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { modalSliceActions } from "../../ReduxStore/modal-slice";

const NavigationBar = (props) => {
  const authCtx = useContext(AuthContext);
  const isAuthenticated = authCtx.isAuthenticated;

  const profileImageSrc = useSelector(
    (state) => state.userData.profileImageSrc
  );

  const dispatch = useDispatch();

  const userProfileOpenHandler = () => {
    isAuthenticated &&
      dispatch(modalSliceActions.displayModal({ identifier: "user-profile" }));
  };

  const logoutModalDisplayHandler = () => {
    dispatch(modalSliceActions.displayModal({ identifier: "logout" }));
  };

  return (
    <>
      <div className={styles.navBarDiv}>
        <div>
          <abbr title="India's First Virtual School">
            <img
              className={styles.logoImage}
              src={ifvsLogo}
              alt="IFVS LOGO"
              width="50vh"
            />
          </abbr>

          <div className={styles.mainHeader}>IFVS</div>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName={styles.activeClassName} to="/home-page">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={styles.activeClassName}
                to="/about-page"
              >
                About
              </NavLink>
            </li>
            {!isAuthenticated && (
              <li>
                <NavLink
                  activeClassName={styles.activeClassName}
                  to="/login-page"
                >
                  Login
                </NavLink>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <NavLink
                  activeClassName={styles.activeClassName}
                  to="/course-page"
                >
                  Course
                </NavLink>
              </li>
            )}
            <li>
              <div className={styles.profileImgContainer}>
                <img
                  className={styles.profileImg}
                  src={profileImageSrc}
                  width="40vh"
                  height="40vh"
                  alt=""
                  onClick={userProfileOpenHandler}
                />
              </div>
            </li>
            {isAuthenticated && (
              <li>
                <button onClick={logoutModalDisplayHandler}>
                  Logout&nbsp;
                  <BiLogOut />
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default NavigationBar;
