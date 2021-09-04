import styles from './HelpOrQueryElement.module.css'
const HelpOrQueryElement = (props) => {
  return (
    <details className={styles.deatilsCard}>
      <summary>{props.title}</summary>
      <p>{props.description}</p>
    </details>
  );
};
export default HelpOrQueryElement;
