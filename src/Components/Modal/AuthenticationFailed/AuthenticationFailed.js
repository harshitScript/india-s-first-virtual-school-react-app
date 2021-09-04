import styles from "./AuthenticationFailed.module.css";
import { AiFillAlert } from "react-icons/ai";
import PossibleHttpErrorReasons from "../../../UI/PossibleHttpErrorReasons/PossibleHttpErrorReasons";

const AuthenticationFailed = () => {
  return (
    <>
      <span className={styles.firstSpan}>Authentication Failed !</span>
      <AiFillAlert className={styles.alertSign} />
      <PossibleHttpErrorReasons displayNewUserLine={true} />
    </>
  );
};
export default AuthenticationFailed;
