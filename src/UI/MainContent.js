import styles from './MainContent.module.css'
const MainContent = (props) => {
  return (
    <div className={`${styles.mainContent} ${props.className}`}>
      {props.children}
    </div>
  );
};
export default MainContent;
