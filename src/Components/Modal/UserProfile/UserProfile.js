import { useSelector } from "react-redux";
import styles from "./UserProfile.module.css";
import SimpleButton from "../../../UI/Button/SimpleButton";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { modalSliceActions } from "../../../ReduxStore/modal-slice";

const UserProfile = (props) => {
  const [currentUserObject, profileImageSrc] = useSelector((state) => [
    state.userData.currentUserObject,
    state.profilePicture.profilePictureSrc,
  ]);
  const dispatch = useDispatch();
  const history = useHistory();

  let dateOfBirth;

  if (currentUserObject.dateOfBirth) {
    let dateOfBirthObj = new Date(currentUserObject.dateOfBirth);
    dateOfBirth = `${dateOfBirthObj.getFullYear()}/${
      dateOfBirthObj.getMonth() + 1
    }/${dateOfBirthObj.getDate()}`;
  } else {
    dateOfBirth = `2021/09/31 *i was created*`;
  }

  const emailPasswordChangePageOpenHandler = () => {
    dispatch(modalSliceActions.hideModal());
    history.push("/change-email-password-page");
  };

  const studentIdModalOpenHandler = () => {
    dispatch(
      modalSliceActions.displayModal({
        identifier: "display-active-student-id",
      })
    );
  };

  const logoutModalDisplayHandler = () => {
    dispatch(modalSliceActions.displayModal({ identifier: "logout" }));
  };

  const editPersonalDetailsPageOpener = () => {
    dispatch(modalSliceActions.hideModal());
    history.push("/edit-personal-details-page");
  };

  return (
    <>
      <div className={styles.profileImageDiv}>
        <img src={profileImageSrc} alt="profile" />
      </div>
      <div className={styles.spanDiv}>
        <span>{currentUserObject.studentName}</span>
        <span>{currentUserObject.class}</span>
        <span>{`Date of Birth : ${dateOfBirth}`}</span>
        <span>{`Father : ${currentUserObject.fatherName}`}</span>
        <span>{`Mother : ${currentUserObject.motherName}`}</span>
        <span>{`Nationality : ${currentUserObject.nationality}`}</span>
        <span>{`Email : ${currentUserObject.email}`}</span>
        <span>{`Phone : +${currentUserObject.contact}`}</span>
      </div>
      <div className={styles.buttonContainer}>
        <SimpleButton onClick={emailPasswordChangePageOpenHandler}>
          Change Email
        </SimpleButton>
        <SimpleButton onClick={emailPasswordChangePageOpenHandler}>
          Change Password
        </SimpleButton>
        <SimpleButton onClick={studentIdModalOpenHandler}>
          Student ID
        </SimpleButton>
      </div>
      <SimpleButton
        className={styles.fullLengthBtn}
        onClick={editPersonalDetailsPageOpener}
      >
        Edit Details
      </SimpleButton>
      <SimpleButton
        onClick={logoutModalDisplayHandler}
        className={styles.fullLengthBtn}
      >
        Logout
      </SimpleButton>
    </>
  );
};
export default UserProfile;
