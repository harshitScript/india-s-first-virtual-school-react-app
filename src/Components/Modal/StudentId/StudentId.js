import { useSelector } from "react-redux";
import { FiClipboard } from "react-icons/fi";
import { FaClipboardCheck } from "react-icons/fa";
import styles from "./StudentId.module.css";
import { useState } from "react";

const StudentId = (props) => {
  const [copied, setCopied] = useState(false);

  const studentIdToDisplayWhenNewUserIsAdded = useSelector(
    (state) => state.modal.additionalPayload?.studentId
  );

  const studentIdToDisplayWhenAuthenticatedUserIsRequesting = useSelector(
    (state) => state.userData.activeStudentId
  );

  // COPY TO CLIPBOARD FUNCTIONALITY
  const copyToClipboardHandler = () => {
    if (studentIdToDisplayWhenNewUserIsAdded) {
      navigator.clipboard.writeText(studentIdToDisplayWhenNewUserIsAdded);
    } else {
      navigator.clipboard.writeText(
        studentIdToDisplayWhenAuthenticatedUserIsRequesting
      );
    }
    setCopied(true);
  };

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
      <span className={styles.secondSpan}>
        {`'${studentIdToDisplay}' `}
        {!copied && (
          <abbr title="Copy to clipboard">
            <FiClipboard
              onClick={copyToClipboardHandler}
              className={styles.warningClass}
            />
          </abbr>
        )}
        {copied && (
          <abbr title="Copied">
            <FaClipboardCheck className={styles.successClass} />
          </abbr>
        )}
      </span>
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
