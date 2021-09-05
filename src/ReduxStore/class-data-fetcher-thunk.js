import axios from "axios";
import { classDataSliceActions } from "./class-data-slice";
const classDataFetcherThunk = () => {
  return (disptach) => {
    disptach(classDataSliceActions.setLoadingTrue());
    disptach(classDataSliceActions.setErrorFalse());
    axios
      .get("https://ifvs-8e70a-default-rtdb.firebaseio.com/class-data.json")
      .then((responseObj) => {
        // STATE BATCHING

        disptach(classDataSliceActions.setDataIsPresent());
        disptach(classDataSliceActions.setErrorFalse());
        disptach(classDataSliceActions.setLoadingFalse());
        disptach(
          classDataSliceActions.setPrimaryClassData(responseObj.data.primary)
        );
        disptach(
          classDataSliceActions.setMiddleClassData(responseObj.data.middle)
        );
        disptach(
          classDataSliceActions.setSecondaryClassData(
            responseObj.data.secondary
          )
        );
        disptach(
          classDataSliceActions.setSeniorSecondaryClassData(
            responseObj.data.seniorSecondary
          )
        );
      })
      .catch((error) => {
        disptach(classDataSliceActions.setLoadingFalse());
        disptach(classDataSliceActions.setErrorTrue());
      });
  };
};
export default classDataFetcherThunk;
