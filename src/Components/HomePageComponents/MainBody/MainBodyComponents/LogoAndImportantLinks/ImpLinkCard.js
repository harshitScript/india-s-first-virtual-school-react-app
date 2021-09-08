import styles from "./ImpLinkCard.module.css";
import Card from "../../../../../UI/Card";
const ImpLinkCard = (props) => {
  return (
    <Card className={styles.linkCard}>
      <span>
        {`${props.title} : `}
        <a href={props.href} target="_blank" rel="noreferrer">
          Click..
        </a>
      </span>
    </Card>
  );
};
export default ImpLinkCard;
