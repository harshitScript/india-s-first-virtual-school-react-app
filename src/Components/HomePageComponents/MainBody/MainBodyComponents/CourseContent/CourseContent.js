import Card from "../../../../../UI/Card";
import styles from "./CourseContent.module.css";
import CourseDescription from "./CourseDescription";
import CourseNavigation from "./CourseNavigation";

const CourseContent = (props) => {
  return (
    <Card className={styles.card}>
      <span className={styles.headerSpan}>Courses</span>
      <CourseNavigation />
      <CourseDescription />
    </Card>
  );
};
export default CourseContent;
