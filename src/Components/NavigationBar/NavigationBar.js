import styles from "./NavigationBar.module.css";
import ifvsLogo from "../../Assets/ifvslogo.jpg";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../Context/auth-context";
import { useSelector, useDispatch } from "react-redux";
import { modalSliceActions } from "../../ReduxStore/modal-slice";
import { AiOutlineMenu } from "react-icons/ai";
import MobileViewNavigationList from "./MobileViewNavigationList";

const NavigationBar = (props) => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const authCtx = useContext(AuthContext);
  const isAuthenticated = authCtx.isAuthenticated;

  const profileImageSrc = useSelector(
    (state) => state.profilePicture.profilePictureSrc
  );

  const mobileMenuToggleHandler = () => {
    setDisplayMobileMenu((currentDisplayMenu) => {
      return currentDisplayMenu ? false : true;
    });
  };

  const dispatch = useDispatch();

  const userProfileOpenHandler = () => {
    isAuthenticated &&
      dispatch(modalSliceActions.displayModal({ identifier: "user-profile" }));
  };

  return (
    <>
      <div className={styles.navBarDiv}>
        <div>
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

          <AiOutlineMenu
            onClick={mobileMenuToggleHandler}
            className={styles.menuIcon}
          />
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
          </ul>
        </nav>

        {/* FOR MOBILE VIEW */}

        {displayMobileMenu && (
          <MobileViewNavigationList
            userProfileOpenHandler={userProfileOpenHandler}
            isAuthenticated={isAuthenticated}
            profileImageSrc={profileImageSrc}
          />
        )}
      </div>
    </>
  );
};
export default NavigationBar;
