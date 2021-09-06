import { useSelector } from "react-redux";
import styles from "./StudentId.module.css";
const StudentId = (props) => {
  const studentIdToDisplayWhenNewUserIsAdded = useSelector(
    (state) => state.modal.additionalPayload?.studentId
  );

  const studentIdToDisplayWhenAuthenticatedUserIsRequesting = useSelector(
    (state) => state.userData.activeStudentId
  );

  let studentIdToDisplay;
  if (studentIdToDisplayWhenNewUserIsAdded) {
    studentIdToDisplay = studentIdToDisplayWhenNewUserIsAdded;
  }
  if (studentIdToDisplayWhenAuthenticatedUserIsRequesting) {
    studentIdToDisplay = studentIdToDisplayWhenAuthenticatedUserIsRequesting;
  }

  return (
    <>
      <span className={styles.firstSpan}>Student Id</span>
      <span className={styles.secondSpan}>{`'${studentIdToDisplay}'`}</span>
      <span className={styles.thirdSpan}>
        *Keep it safe for future reference.*
      </span>
      {props.showUserAddedSucessFully && (
        <span className={styles.fourthSpan}>User Added successfully.</span>
      )}
    </>
  );
};
export default StudentId;
