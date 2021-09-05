import styles from "./PossibleHttpErrorReasons.module.css";
const PossibleHttpErrorReasons = (props) => {
  return (
    <details className={styles.detailsTag}>
      <summary>Possible reasons</summary>
      <ol>
        <li>Network error/Weak connection.</li>
        {props.emailPasswordMismatchedDisplay && (
          <li>Email/Password is mis-matched.</li>
        )}
        <li>500 | Internal server error.</li>
        {props.displayNewUserLine && <li>New user ? Register first !!!</li>}
      </ol>
    </details>
  );
};
export default PossibleHttpErrorReasons;
