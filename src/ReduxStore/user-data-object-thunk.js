import axios from "axios";
import { userDataObjectSliceActions } from "./user-data-object-slice";

const userDataObjectSliceThunk = (currentEmail) => {
  return (dispatch) => {
    dispatch(userDataObjectSliceActions.setLoadingTrue());
    dispatch(userDataObjectSliceActions.setErrorFalse());
    axios
      .get("https://ifvs-8e70a-default-rtdb.firebaseio.com/user-data.json")
      .then((responseObj) => {
        dispatch(
          userDataObjectSliceActions.setUserDataAndCurrentUserAndProfileImageAndStudentId(
            {
              userDataObj: responseObj.data,
              email: currentEmail,
            }
          )
        );
        dispatch(userDataObjectSliceActions.setDataIsPresent());
        dispatch(userDataObjectSliceActions.setErrorFalse());
        dispatch(userDataObjectSliceActions.setLoadingFalse());
      })
      .catch((error) => {
        dispatch(userDataObjectSliceActions.setLoadingFalse());
        dispatch(userDataObjectSliceActions.setErrorTrue());
      });
  };
};

export default userDataObjectSliceThunk;
