import { useSelector } from "react-redux";
import styles from "./UserProfile.module.css";

const UserProfile = (props) => {
  const [currentUserObject, profileImageSrc] = useSelector((state) => [
    state.userData.currentUserObject,
    state.userData.profileImageSrc,
  ]);

  let dateOfBirth;

  if (currentUserObject.dateOfBirth) {
    let dateOfBirthObj = new Date(currentUserObject.dateOfBirth);
    dateOfBirth = `${dateOfBirthObj.getFullYear()}/${
      dateOfBirthObj.getMonth() + 1
    }/${dateOfBirthObj.getDate()}`;
  } else {
    dateOfBirth = `2021/09/31 *i was created*`;
  }

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
        <span>{`Phone : +${currentUserObject.contact}`}</span>
      </div>
    </>
  );
};
export default UserProfile;
