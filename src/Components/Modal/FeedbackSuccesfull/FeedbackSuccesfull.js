import styles from "./FeedbackSuccesfull.module.css";
import { FaThumbsUp } from "react-icons/fa";
const FeedbackSuccesfull = () => {
  return (
    <>
      <span className={styles.firstSpan}>Feedback received successfully.</span>
      <FaThumbsUp className={styles.thumbsUpIcon} />
    </>
  );
};
export default FeedbackSuccesfull;
