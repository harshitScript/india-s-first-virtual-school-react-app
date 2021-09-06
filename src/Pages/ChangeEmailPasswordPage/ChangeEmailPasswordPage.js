import LoginFormCard from "../../Components/LoginPageComponents/LoginFormCard";
import MainContent from "../../UI/MainContent";
import { useState } from "react";
import styles from "./ChangeEmailPasswordPage.module.css";
import ChangeEmailPasswordFormCard from "../../Components/ChangeEmailPasswordPageComponents/ChangeEmailPasswordFormCard";

const ChangeEmailPasswordPage = () => {
  const [displayEmailPasswordForm, setDisplayEmailPasswordForm] =
    useState(false);
  const additionalFunctionalityHandler = () => {
    setDisplayEmailPasswordForm(true);
  };
  return (
    <MainContent className={styles.mainCardFlex}>
      {!displayEmailPasswordForm && (
        <LoginFormCard
          displayNewUserButton={false}
          displayInfoText ={true}
          infoText='You have to login first.'
          additionalFunctionality={additionalFunctionalityHandler}
        />
      )}
      {displayEmailPasswordForm && <ChangeEmailPasswordFormCard />}
    </MainContent>
  );
};
export default ChangeEmailPasswordPage;
