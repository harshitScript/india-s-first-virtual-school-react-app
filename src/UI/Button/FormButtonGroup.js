import styles from "./FormButtonGroup.module.css";

const FormButtonGroup = (props) => {
  return (
    <div className={styles.formButtonGroup}>
      <button
        type="submit"
        onClick={props.onClickOnSubmitButton}
        disabled={props.submitDisable}
      >
        {props.submitButtonText}
      </button>
      <div>
        <button type="reset">Reset</button>
        <button onClick={props.onCancel} type="button">
          Cancel
        </button>
      </div>
    </div>
  );
};
export default FormButtonGroup;
