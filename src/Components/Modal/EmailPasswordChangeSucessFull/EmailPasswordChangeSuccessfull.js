import { useSelector } from "react-redux";
import styles from "./EmailPasswordChangeSuccessfull.module.css";
import { FaThumbsUp } from "react-icons/fa";

const EmailPasswordChangeSuccessfull = () => {
  const whatIsChanged = useSelector(
    (state) => state.modal.additionalPayload.whatIsChanged
  );
  return (
    <>
      <span className={styles.firstSpan}>
        {whatIsChanged} changed successfully.
      </span>
      <FaThumbsUp className={styles.thumbsUpIcon} />
    </>
  );
};
export default EmailPasswordChangeSuccessfull;
