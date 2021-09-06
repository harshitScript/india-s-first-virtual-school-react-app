import styles from "./UnknownError.module.css";
import { BiErrorAlt } from "react-icons/bi";
import PossibleHttpErrorReasons from "../../../UI/PossibleHttpErrorReasons/PossibleHttpErrorReasons";
const UnknownError = () => {
  return (
    <>
      <span className={styles.firstSpan}>Unknown Error occured.</span>
      <BiErrorAlt className={styles.errorIcon} />
      <span className={styles.secondSpan}>Try again.</span>
      <PossibleHttpErrorReasons />
    </>
  );
};
export default UnknownError;
