import axios from "axios";
import { importantLinksSliceActions } from "./important-links-slice";

const importantLinksFetcherThunk = () => {
  return (dispatch) => {
    dispatch(importantLinksSliceActions.setLoadingTrue());
    dispatch(importantLinksSliceActions.setErrorFalse());
    axios
      .get(
        "https://ifvs-8e70a-default-rtdb.firebaseio.com/important-links.json"
      )
      .then((responseObj) => {
        dispatch(
          importantLinksSliceActions.setImportantLinks(responseObj.data)
        );
        dispatch(importantLinksSliceActions.setLoadingFalse());
        dispatch(importantLinksSliceActions.setErrorFalse());
      })
      .catch((error) => {
        dispatch(importantLinksSliceActions.setErrorTrue());
        dispatch(importantLinksSliceActions.setLoadingFalse());
      });
  };
};

export default importantLinksFetcherThunk;
