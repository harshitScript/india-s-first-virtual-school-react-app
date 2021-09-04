import Card from "../../UI/Card";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import Logout from "./Logout/Logout";
import UserProfile from "./UserProfile/UserProfile";
import StudentId from "./StudentId/StudentId";
import { TiCancel } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { modalSliceActions } from "../../ReduxStore/modal-slice";
import AuthenticationFailed from "./AuthenticationFailed/AuthenticationFailed";
import AddUserError from "./AddUserError/AddUserError";
import CSSTransitionUI from "../../UI/CSSTransitionUI/CSSTransitionUI";

const Modal = (props) => {
  const dispatch = useDispatch();
  const [modalDisplay, additionalPayload] = useSelector((state) => [
    state.modal.modalDisplay,
    state.modal.additionalPayload,
  ]);
  const modalType = additionalPayload.identifier;

  // CONTENT TO DISPLAY AND  NAVIGATIONAL FUNCTIONS CONDITIOn
  let contentToDisplay;
  if (modalType === "logout") {
    contentToDisplay = <Logout />;
  }
  if (modalType === "user-profile") {
    contentToDisplay = <UserProfile />;
  }
  if (modalType === "student-id") {
    contentToDisplay = <StudentId />;
  }
  if (modalType === "auth-error") {
    contentToDisplay = <AuthenticationFailed />;
  }
  if (modalType === "add-user-error") {
    contentToDisplay = <AddUserError />;
  }

  const modalHideHandler = () => {
    dispatch(modalSliceActions.hideModal());
  };

  const backdrop = modalDisplay ? <div className={styles.backdrop} /> : "";
  const modal = (
    <CSSTransitionUI
      in={modalDisplay}
      timeoutObj={{ enter: 1000, exit: 1000 }}
      classNamesObj={{
        enter: "",
        enterActive: styles.modalEnter,
        enterDone: "",
        exit: "",
        exitActive: styles.modalExit,
        exitDone: "",
      }}
    >
      <Card className={styles.modal}>
        <div className={styles.cancelHolderDiv}>
          <TiCancel onClick={modalHideHandler} />
        </div>
        {contentToDisplay}
      </Card>
    </CSSTransitionUI>
  );
  return (
    <>
      {createPortal(backdrop, document.getElementById("backdrop-divs"))}

      {createPortal(modal, document.getElementById("overlay-divs"))}
    </>
  );
};
export default Modal;
