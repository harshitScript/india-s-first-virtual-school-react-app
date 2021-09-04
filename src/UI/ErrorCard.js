import Card from "./Card";
import styles from "./ErrorCard.module.css";

const ErrorCard = (props) => {
  return (
    <Card className={props.className}>
      <div>
        <span className={styles.errorMsgSpan}>Unknown Error Occured !</span>
        <button onClick={props.refreshHandler} className={styles.refreshBtn}>
          Refresh
        </button>
      </div>
    </Card>
  );
};
export default ErrorCard;
