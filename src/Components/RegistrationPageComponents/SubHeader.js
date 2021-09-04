import styles from './SubHeader.module.css'
const SubHeader = (props) => {
  return <span className={styles.subHeader}>{props.children}</span>;
};
export default SubHeader;
