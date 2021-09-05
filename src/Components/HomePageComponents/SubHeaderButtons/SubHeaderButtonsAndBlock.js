import styles from "./SubHeaderButtonsAndBlock.module.css";
import { Route, useRouteMatch, useHistory, useLocation } from "react-router";
import DisplayBox from "./DisplayBox";

const SubHeaderButtonsAndBlock = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();

  const importantAnnouncementOpener = () => {
    if (location.pathname === "/home-page/info-box/important-announcements") {
      history.push(match.path);
    } else {
      history.push(`${match.path}/info-box/important-announcements`);
    }
  };

  const helpDocsOpener = () => {
    if (location.pathname === "/home-page/info-box/help-docs") {
      history.push(match.path);
    } else {
      history.push(`${match.path}/info-box/help-docs`);
    }
  };

  const howToUseOpener = () => {
    if (location.pathname === "/home-page/info-box/use-instructions") {
      history.push(match.path);
    } else {
      history.push(`${match.path}/info-box/use-instructions`);
    }
  };

  return (
    <div className={styles.btnConatinerDiv}>
      <button onClick={helpDocsOpener} className={styles.btnConatinerDiv}>
        Help Docs
      </button>

      <button
        onClick={importantAnnouncementOpener}
        className={styles.btnConatinerDiv}
      >
        Important Announcements
      </button>

      <button onClick={howToUseOpener} className={styles.btnConatinerDiv}>
        How to use
      </button>

      <Route path={`${match.path}/info-box/:infoType`}>
        <DisplayBox />
      </Route>
    </div>
  );
};
export default SubHeaderButtonsAndBlock;
