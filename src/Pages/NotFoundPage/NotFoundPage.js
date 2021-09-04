import NotFoundMessage from "../../Components/NotFoundPageComponents/NotFoundMessage";
import MainContent from "../../UI/MainContent";
import styles from './NotFoundPage.module.css'
const NotFoundPage = () => {
    return <MainContent className={styles.mainContentFlexing}>
        <NotFoundMessage />
    </MainContent>
};
export default NotFoundPage;
