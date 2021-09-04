import { BiErrorCircle } from "react-icons/bi";
import styles from "./TextArea.module.css";
const TextArea = (props) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        onChange={props.onChange}
        onBlur={props.onBlur}
        rows={props.rows}
        id={props.id}
        name={props.name}
        placeholder={props.placeHolder}
        required={props.required}
      ></textarea>
      {props.hasError && (
        <span>
          <BiErrorCircle />
          &nbsp;{props.errorMsg}
        </span>
      )}
    </div>
  );
};
export default TextArea;
