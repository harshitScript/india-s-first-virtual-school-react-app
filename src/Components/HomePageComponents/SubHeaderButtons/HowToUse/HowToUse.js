import styles from "./HowToUse.module.css";
const HowToUse = () => {
  return (
    <>
      <span className={styles.headerSpan}>How to use</span>
      <hr />
      <ol className={styles.orderedList}>
        <li>Explore the home page.</li>
        <li>Select the course you wanna enroll in.</li>
        <li>Go to the login page and click on New User.</li>
        <li>Submit the registration form with correct details.</li>
        <li>Once submitted , a student id is generated keep it safe.</li>
        <li>Login with your email and password.</li>
        <li>Boom ! enjoy your free course through course section.</li>
      </ol>
    </>
  );
};
export default HowToUse;
