import NotFoundIcon from '../../Icons/NotFoundIcon';
import styles from './NotFoundMessage.module.css'
const NotFoundMessage = () => {
  return (
    <div>  
      <NotFoundIcon/>
      <span className={styles.warningSpan}>404 Not Found !</span>
    </div>
  );
};
export default NotFoundMessage;
