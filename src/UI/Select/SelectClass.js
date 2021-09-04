import { BiErrorCircle } from "react-icons/bi";
import styles from "./SelectClass.module.css";

const SelectClass = (props) => {
  

  return (
    <div className={styles.formGroup}>
      <label htmlFor="STD_CLASS">
        Class* : <span>(to be enrolled.)</span>
      </label>
      <select
        onChange={props.onChange}
        onBlur={props.onBlur}
        name="STD_CLASS"
        id="STD_CLASS"
        required={props.required}
      >
        <option value="0" selected="discarded">
          Select Class
        </option>
        <option value="First">First</option>
        <option value="Second">Second</option>
        <option value="Third">Third</option>
        <option value="Fourth">Fourth</option>
        <option value="Fifth">Fifth</option>
        <option value="Sixth">Sixth</option>
        <option value="Seventh">Seventh</option>
        <option value="Eight">Eight</option>
        <option value="Ninth">Ninth</option>
        <option value="Tenth">Tenth</option>
        <option value="Eleventh-Commerce">Eleventh-Commerce</option>
        <option value="Eleventh-PCM">Eleventh-PCM</option>
        <option value="Eleventh-PCB">Eleventh-PCB</option>
        <option value="Eleventh-PCMB">Eleventh-PCMB</option>
        <option value="Twelfth-Commerce">Twelfth-Commerce</option>
        <option value="Twelfth-PCM">Twelfth-PCM</option>
        <option value="Twelfth-PCB">Twelfth-PCB</option>
        <option value="Twelfth-PCMB">Twelfth-PCMB</option>
      </select>
      {props.hasError && (
        <span>
          <BiErrorCircle />
          &nbsp;{props.errorMsg}
        </span>
      )}
    </div>
  );
};
export default SelectClass;
