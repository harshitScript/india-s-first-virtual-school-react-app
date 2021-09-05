import styles from "./SimpleButton.module.css";
const SimpleButton = (props) => {
  return (
    <button
      type={props.type}
      className={` ${styles.simpleButton} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default SimpleButton;
