import axios from "axios";
import { helpDocsSliceActions } from "./help-docs-slice";

const helpDocsThunk = () => {
  return (dispatch) => {
    dispatch(helpDocsSliceActions.setLoadingTrue());
    axios
      .get("https://ifvs-8e70a-default-rtdb.firebaseio.com/help-docs.json")
      .then((responseObj) => {
        dispatch(helpDocsSliceActions.setLoadingFalse());
        dispatch(helpDocsSliceActions.setErrorFalse());
        dispatch(helpDocsSliceActions.setHelpDocs(responseObj.data));
      })
      .catch((error) => {
        dispatch(helpDocsSliceActions.setLoadingFalse());
        dispatch(helpDocsSliceActions.setErrorTrue());
      });
  };
};

export default helpDocsThunk;
