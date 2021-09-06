import MainContent from "../../UI/MainContent";
import styles from "./LoginPage.module.css";
import LoginFormCard from "../../Components/LoginPageComponents/LoginFormCard";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const additionalFunctionalityHandler = () => {
    history.replace("/home-page");
  };
  return (
    <MainContent className={styles.mainCardFlex}>
      <LoginFormCard
        displayInfoText={false}
        displayNewUserButton={true}
        additionalFunctionality={additionalFunctionalityHandler}
      />
    </MainContent>
  );
};
export default LoginPage;
