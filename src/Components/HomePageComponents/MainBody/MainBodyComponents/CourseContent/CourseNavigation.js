import styles from "./CourseNavigation.module.css";
import { NavLink, useRouteMatch } from "react-router-dom";
const CourseNavigation = () => {
  const match = useRouteMatch();
  return (
    <div className={styles.linksContainer}>
      <NavLink to={`${match.path}/primary`}>Primary</NavLink>
      <NavLink to={`${match.path}/middle`}>Middle</NavLink>
      <NavLink to={`${match.path}/secondary`}>Secondary</NavLink>
      <NavLink to={`${match.path}/senior-secondary`}>Senior-Secondary</NavLink>
    </div>
  );
};
export default CourseNavigation;
