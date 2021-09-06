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
import FeedbackSuccesfull from "./FeedbackSuccesfull/FeedbackSuccesfull";
import FeedbackError from "./FeedbackError/FeedbackError";
import EmailPasswordChangeSuccessfull from "./EmailPasswordChangeSucessFull/EmailPasswordChangeSuccessfull";
import UnknownError from "./UnknownError/UnknownError";
import ConfirmationLoginFormEmailMisMatchedError from "./ConfirmationLoginFormEmailMisMatchedError/ConfirmationLoginFormEmailMisMatchedError";

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
  if (modalType === "student-id-when-new-user-added") {
    contentToDisplay = <StudentId showUserAddedSucessFully={true} />;
  }
  if (modalType === "auth-error") {
    contentToDisplay = <AuthenticationFailed />;
  }
  if (modalType === "add-user-error") {
    contentToDisplay = <AddUserError />;
  }
  if (modalType === "feedback-successfull") {
    contentToDisplay = <FeedbackSuccesfull />;
  }
  if (modalType === "feedback-error") {
    contentToDisplay = <FeedbackError />;
  }
  if (modalType === "email-changed-success") {
    contentToDisplay = <EmailPasswordChangeSuccessfull />;
  }
  if (modalType === "password-changed-success") {
    contentToDisplay = <EmailPasswordChangeSuccessfull />;
  }
  if (modalType === "email-change-error") {
    contentToDisplay = <UnknownError />;
  }
  if (modalType === "password-change-error") {
    contentToDisplay = <UnknownError />;
  }
  if (modalType === "display-active-student-id") {
    contentToDisplay = <StudentId showUserAddedSucessFully={false} />;
  }
  if (modalType === "confirmation-login-form-email-mismatched") {
    contentToDisplay = <ConfirmationLoginFormEmailMisMatchedError />;
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
