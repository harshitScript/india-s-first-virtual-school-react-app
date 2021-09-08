import MainContent from "../UI/MainContent";
import Card from "../UI/Card";
import styles from "./PageErrorThroughErrorBoundary.module.css";

const PageErrorThroughErrorBoundary = () => {
  return (
    <MainContent className={styles.flexDiv}>
      <Card className={styles.card}>
        <div className={styles.flexDiv}>
          <lord-icon
            src="https://cdn.lordicon.com/sbiheqdr.json"
            trigger="loop"
            colors="primary:#320a5c,secondary:#8930e8"
            style={{ width: "50%", height: "50%" }}
          ></lord-icon>
        </div>
        <span className={styles.unexpectedTextSpan}>
          Unexpected Error Occured.
        </span>
        <span className={styles.refreshTextSpan}>Try refreshing the page.</span>
      </Card>
    </MainContent>
  );
};
export default PageErrorThroughErrorBoundary;
