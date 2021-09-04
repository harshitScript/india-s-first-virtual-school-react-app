import Card from "../../UI/Card";
import SimpleButton from "../../UI/Button/SimpleButton";
import styles from "./SingleCourseCard.module.css";
const SingleCourseCard = (props) => {
  const playlistNavigationHandler = () => {
    window.open(props.link);
  };
  return (
    <Card className={styles.singleCourseCard}>
      <span>{props.subject}</span>
      <div>
        <SimpleButton onClick={playlistNavigationHandler}>Start</SimpleButton>
      </div>
    </Card>
  );
};
export default SingleCourseCard;
