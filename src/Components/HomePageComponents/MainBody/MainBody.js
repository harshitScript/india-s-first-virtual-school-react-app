import styles from "./MainBody.module.css";
import CourseContent from "./MainBodyComponents/CourseContent/CourseContent";
import Facilities from "./MainBodyComponents/Facilities/Facilities";
import LogoAndImportantLinks from "./MainBodyComponents/LogoAndImportantLinks/LogoAndImportantLinks";

const MainBody = (props) => {
  return (
    <div className={styles.mainBodyDiv}>
      <div className={styles.leftDiv}>
        <Facilities />
      </div>
      <div className={styles.centerDiv}>
        <CourseContent />
      </div>
      <div className={styles.rightDiv}>
        <LogoAndImportantLinks />
      </div>
    </div>
  );
};
export default MainBody;
