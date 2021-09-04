import { useSelector } from "react-redux";
import styles from "./StudentId.module.css";
const StudentId = () => {
  const studentId = useSelector(
    (state) => state.modal.additionalPayload.studentId
  );
  return (
    <>
      <span className={styles.firstSpan}>Student Id</span>
      <span className={styles.secondSpan}>{`'${studentId}'`}</span>
      <span className={styles.thirdSpan}>
        *Keep it safe for future reference.*
      </span>
      <span className={styles.fourthSpan}>User Added successfully.</span>
    </>
  );
};
export default StudentId;
