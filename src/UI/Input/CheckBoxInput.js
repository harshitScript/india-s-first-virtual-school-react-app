import styles from "./CheckBoxInput.module.css";
const CheckBoxInput = (props) => {
  return (
    <div
      className={`${styles.formGroup} ${props.classNameAppliedToFormGroupDiv}`}
    >
      <label htmlFor={props.id}>
        {props.label}&nbsp;
        <input
          type="checkbox"
          onClick={props.onClick}
          required={props.required}
        />
      </label>
    </div>
  );
};
export default CheckBoxInput;
