import LoadingCard from "./LoadingCard";
import styles from "./LoadingPageFallbackJSX.module.css";
import MainContent from "./MainContent";

const LoadingPageFallbackJSX = () => {
  return (
    <MainContent className={styles.flexDiv}>
      <LoadingCard />
    </MainContent>
  );
};
export default LoadingPageFallbackJSX;
