import styles from "./ClassDetailsClass.module.css";
import Card from "../../UI/Card";
const ClassDetailsCard = (props) => {
  const matchedStandardObject = props.matchedObject;
  
  let description = "";
  let matchedClassSubjectsString = "";
  
  if (matchedStandardObject) {
    description = matchedStandardObject.desc;

    matchedClassSubjectsString = matchedStandardObject.subjects
      .map((subjectObj) => subjectObj["sub-name"])
      .reduce((acc = "", subName) => (acc = acc + `  ${subName}`));
  }

  return (
    <Card className={styles.classDetailsCard}>
      <span className={styles.headerSpan}>{props.classGroup} Group</span>
      <span className={styles.subHeaderSpan}>
        <span>{props.standard}</span> class overview
      </span>
      <span className={styles.subjectsSpan}>{matchedClassSubjectsString}</span>
      <span className={styles.descSpan}>{description}</span>
    </Card>
  );
};
export default ClassDetailsCard;
