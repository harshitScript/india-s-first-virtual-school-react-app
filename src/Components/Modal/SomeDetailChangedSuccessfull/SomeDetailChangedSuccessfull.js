import { useSelector } from "react-redux";
import styles from "./SomeDetailChangedSuccessfull.module.css";
import { FaThumbsUp } from "react-icons/fa";

const SomeDetailChangedSuccessfull = () => {
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
export default SomeDetailChangedSuccessfull;
