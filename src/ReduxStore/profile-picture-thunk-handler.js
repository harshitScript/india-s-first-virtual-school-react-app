import { storage } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { profilePictureSliceActions } from "./profile-picture-slice";

export const profilePictureUploadThunkHandler = (
  fileObj,
  email,
  errorHandler
) => {
  return (dispatch) => {
    const currentUserprofilePictureRef = ref(
      storage,
      `profile-pictures/${email}-profile-picture`
    );

    uploadBytes(currentUserprofilePictureRef, fileObj)
      .then((snapShot) => {})
      .catch((error) => {
        errorHandler();
      });
  };
};

export const profilePictureDownloadThunkHandler = (email) => {
  return (dispatch) => {
    const currentUserprofilePictureRef = ref(
      storage,
      `profile-pictures/${email}-profile-picture`
    );

    getDownloadURL(currentUserprofilePictureRef).then((url) => {
      dispatch(profilePictureSliceActions.setProfilePicture(url));
      localStorage.setItem("profilePictureSrc", url);
    });
  };
};
