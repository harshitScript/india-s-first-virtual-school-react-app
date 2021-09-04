import styles from "./AddUserError.module.css";
import { BiErrorAlt } from "react-icons/bi";
import PossibleHttpErrorReasons from "../../../UI/PossibleHttpErrorReasons/PossibleHttpErrorReasons";
const AddUserError = () => {
  return (
    <>
      <span className={styles.firstSpan}>Unknown Error occured.</span>
      <BiErrorAlt className={styles.errorIcon} />
      <span className={styles.secondSpan}>Try again.</span>
      <PossibleHttpErrorReasons />
    </>
  );
};
export default AddUserError;
