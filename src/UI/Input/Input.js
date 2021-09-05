import { BiErrorCircle } from "react-icons/bi";
import styles from "./Input.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { forwardRef } from "react";
const Input = forwardRef((props, ref) => {
  // PASSWORD ICON CHECK ( EXCLUSIVELLY FOR PASSWORD FIELD )
  let passwordIconToDisplay;

  if (props.type === "password") {
    passwordIconToDisplay = (
      <FaEye
        className={styles.passwordIcon}
        onClick={props.showHidePasswordHandler}
      />
    );
  }
  if (props.type === "text") {
    passwordIconToDisplay = (
      <FaEyeSlash
        className={styles.passwordIcon}
        onClick={props.showHidePasswordHandler}
      />
    );
  }

  return (
    <div
      className={`${styles.formGroup} ${props.classNameAppliedToFormGroupDiv}`}
    >
      <label htmlFor={props.id}>
        {props.label} <span>{props.subLabel}</span>
      </label>
      <input
        ref={ref}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type={props.type}
        id={props.id}
        placeholder={props.placeHolder}
        name={props.id}
        accept={props.accept}
        required={props.required}
      />
      {props.showDisplayPasswordIcon && passwordIconToDisplay}
      {props.hasError && (
        <span>
          <BiErrorCircle />
          &nbsp;{props.errorMsg}
        </span>
      )}
    </div>
  );
});
export default Input;
