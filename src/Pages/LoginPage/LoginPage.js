import MainContent from "../../UI/MainContent";
import styles from "./LoginPage.module.css";
import LoginFormCard from "../../Components/LoginPageComponents/LoginFormCard";

const LoginPage = () => {
  return (
    <MainContent className={styles.mainCardFlex}>
      <LoginFormCard />
    </MainContent>
  );
};
export default LoginPage;
