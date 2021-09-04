import Card from "../../UI/Card";
import ErrorCard from "../../UI/ErrorCard";
import LoadingCard from "../../UI/LoadingCard";
import styles from "./CourseCard.module.css";
import SingleCourseCard from "./SingleCourseCard";
const CourseCard = (props) => {
  // WHAT CONTENT TO BE DISPLAYED.
  let contentToDisplay = props.subjects.map((subObj) => (
    <SingleCourseCard
      key={subObj["sub-name"]}
      subject={subObj["sub-name"]}
      link={subObj.link}
    />
  ));
  if (props.loading) {
    contentToDisplay = <LoadingCard className={styles.loadingAndErrorCard} />;
  }
  if (props.error) {
    contentToDisplay = (
      <ErrorCard
        refreshHandler={props.classDataFetcherThunkHandler}
        className={styles.loadingAndErrorCard}
      />
    );
  }
  return (
    <Card className={styles.courseCard}>
      <span className={styles.headerSpan}>Course Curriculum</span>
      {contentToDisplay}
    </Card>
  );
};
export default CourseCard;
