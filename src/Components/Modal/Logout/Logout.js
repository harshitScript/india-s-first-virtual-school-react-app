import SimpleButton from "../../../UI/Button/SimpleButton";
import styles from "./Logout.module.css";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { modalSliceActions } from "../../../ReduxStore/modal-slice";

const Logout = (props) => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const disptach = useDispatch();

  const logoutHandler = () => {
    authCtx.logoutHandler();
    disptach(modalSliceActions.hideModal());
    history.replace("/home-page");
  };
  const logoutCancelHandler = () => {
    disptach(modalSliceActions.hideModal());
  };

  return (
    <>
      <span className={styles.mainHeaderSpan}>
        Do you really wanna logout ?
      </span>
      <div className={styles.buttonContainerDiv}>
        <SimpleButton onClick={logoutCancelHandler}>Cancel</SimpleButton>
        <SimpleButton onClick={logoutHandler}>Logout</SimpleButton>
      </div>
    </>
  );
};
export default Logout;
