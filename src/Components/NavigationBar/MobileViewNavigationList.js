import styles from "./MobileViewNavigationList.module.css";
import { NavLink } from "react-router-dom";

const MobileViewNavigationList = (props) => {
  const { userProfileOpenHandler, isAuthenticated, profileImageSrc } = props;
  return (
    <div className={styles.mobileViewDiv}>
      <nav>
        <ul className={styles.mobileViewUnOrderedList}>
          <li>
            <NavLink activeClassName={styles.activeClassName} to="/home-page">
              Home
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink activeClassName={styles.activeClassName} to="/about-page">
              About
            </NavLink>
          </li>
          <hr />
          {!isAuthenticated && (
            <>
              <li>
                <NavLink
                  activeClassName={styles.activeClassName}
                  to="/login-page"
                >
                  Login
                </NavLink>
              </li>
              <hr />
            </>
          )}

          {isAuthenticated && (
            <>
              <li>
                <NavLink
                  activeClassName={styles.activeClassName}
                  to="/course-page"
                >
                  Course
                </NavLink>
              </li>
              <hr />
            </>
          )}
        </ul>
      </nav>

      <div>
        <img
          className={styles.mobileViewProfileImg}
          src={profileImageSrc}
          width="30vh"
          height="30vh"
          alt=""
          onClick={userProfileOpenHandler}
        />
      </div>
    </div>
  );
};
export default MobileViewNavigationList;
