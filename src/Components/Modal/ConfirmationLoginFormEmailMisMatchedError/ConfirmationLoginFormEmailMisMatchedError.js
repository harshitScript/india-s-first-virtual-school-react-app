import styles from "./ConfirmationLoginFormEmailMisMatchedError.module.css";
import { BiErrorAlt } from "react-icons/bi";
const ConfirmationLoginFormEmailMisMatchedError = () => {
  return (
    <>
      <span className={styles.firstSpan}>Email does not matched !</span>
      <BiErrorAlt className={styles.errorIcon} />
      <span className={styles.secondSpan}>
        Try again with authenticated email.
      </span>
    </>
  );
};
export default ConfirmationLoginFormEmailMisMatchedError;
