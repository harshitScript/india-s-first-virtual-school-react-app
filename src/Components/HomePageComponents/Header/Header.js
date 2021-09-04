import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.mainHeaderSpan}>
        India's First Virtual School
      </span>
      <span className={styles.subHeaderSpan}>Your Companion of Success</span>
    </div>
  );
};
export default Header;
