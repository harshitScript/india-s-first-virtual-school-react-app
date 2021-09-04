import Card from "../../../../../UI/Card";
import styles from "./ClassCard.module.css";
import { useHistory } from "react-router-dom";
const ClassCard = (props) => {
  const history = useHistory();

  const singleClassSubjectsString = props.subject
    .map((subjectObj) => subjectObj["sub-name"])
    .reduce((acc = "", subName) => (acc = acc + ` ${subName}`));

  const classDetailsNavigationHandler = () => {
    history.push(`/class-details/${props.classGroup}/${props.standard}`);
  };

  return (
    <Card onClick={classDetailsNavigationHandler} className={props.className}>
      <span className={styles.headerSpan}>{`${props.standard} Standard`}</span>
      <span className={styles.subSpan}>{singleClassSubjectsString}</span>
    </Card>
  );
};
export default ClassCard;
