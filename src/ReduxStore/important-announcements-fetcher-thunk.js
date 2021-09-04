import axios from "axios";
import { importantAnnouncmentActions } from "./important-announcement-slice";

const importantAnnouncementThunk =() => {
  return (dispatch) => {
    dispatch(importantAnnouncmentActions.setLoadingTrue());
    axios
      .get(
        "https://ifvs-8e70a-default-rtdb.firebaseio.com/important-announcements.json"
      )
      .then((responseObj) => {
        dispatch(importantAnnouncmentActions.setLoadingFalse());
        dispatch(importantAnnouncmentActions.setErrorFalse());
        dispatch(importantAnnouncmentActions.setAnnouncments(responseObj.data));
      })
      .catch((error) => {
        dispatch(importantAnnouncmentActions.setLoadingFalse());
        dispatch(importantAnnouncmentActions.setErrorTrue());
      });
  };
};

export default importantAnnouncementThunk;
