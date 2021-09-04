import styles from "./SimpleButton.module.css";
const SimpleButton = (props) => {
  return (
    <button
      type={props.type}
      className={`${props.className} ${styles.simpleButton}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default SimpleButton;
