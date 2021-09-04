import styles from "./Location.module.css";
const Location = () => {
  return (
    <>
      <span className={styles.headerSpan}>Location</span>
      <span className={styles.subTextSpan}>
        Mandsaur(M.P.)
        <br />
        INDIA
        <br />
        pincode : 458001
      </span>
    </>
  );
};
export default Location;
