import styles from "./TitleAndDescription.module.css";
const TitleAndDescription = (props) => {
  
  return (
    <>
      <span className={styles.headerSpan}>{props.header}</span>
      <span className={styles.descSpan}>{props.desc}</span>
    </>
  );
};
export default TitleAndDescription;
