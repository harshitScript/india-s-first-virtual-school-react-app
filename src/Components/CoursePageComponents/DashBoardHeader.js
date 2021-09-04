import Card from "../../UI/Card";
import ErrorCard from "../../UI/ErrorCard";
import LoadingCard from "../../UI/LoadingCard";
import styles from "./DashBoardHeader.module.css";
const DashBoardHeader = (props) => {
  let contentToDisplay = (
    <>
      <span
        className={styles.firstSpan}
      >{`${props.studentName}'s Dashboard`}</span>
      <span className={styles.secondSpan}>{`${props.standard} Class`}</span>
    </>
  );
  if (props.loading) {
    contentToDisplay = <LoadingCard className={styles.loadingAndErrorCard} />;
  }
  if (props.error) {
    contentToDisplay = (
      <ErrorCard
        refreshHandler={props.userDataObjectSliceThunkHandler}
        className={styles.loadingAndErrorCard}
      />
    );
  }
  return <Card className={styles.dashBoardFlexCard}>{contentToDisplay}</Card>;
};
export default DashBoardHeader;
