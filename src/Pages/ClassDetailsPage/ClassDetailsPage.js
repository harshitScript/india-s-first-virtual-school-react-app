import MainContent from "../../UI/MainContent";
import styles from "./ClassDetailsPage.module.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classDataFetcherThunk from "../../ReduxStore/class-data-fetcher-thunk";
import { useEffect } from "react";
import ClassDetailsCard from "../../Components/ClassDetailsPageComponents/ClassDetailsCard";
import LoadingCard from "../../UI/LoadingCard";
import ErrorCard from "../../UI/ErrorCard";

let matchedObject;
const ClassDetailsPage = () => {
  const [
    dataIsPresent,
    primaryClassData,
    middleClassData,
    secondaryClassData,
    seniorSecondaryClassData,
    loading,
    error,
  ] = useSelector((state) => [
    state.classData.dataIsPresent,
    state.classData.primaryClassData,
    state.classData.middleClassData,
    state.classData.secondaryClassData,
    state.classData.seniorSecondaryClassData,
    state.classData.loading,
    state.classData.error,
  ]);

  const params = useParams();
  const dispatch = useDispatch();

  const classDataFetcherThunkHandler = () => {
    dispatch(classDataFetcherThunk());
  };

  const particularStandardDataObjectReturnFunction = (classGroup, standard) => {
    if (classGroup === "primary") {
      let matchedStandardObject = primaryClassData.find(
        (classObj) => classObj.standard === standard
      );
      return matchedStandardObject;
    }
    if (classGroup === "middle") {
      let matchedStandardObject = middleClassData.find(
        (classObj) => classObj.standard === standard
      );
      return matchedStandardObject;
    }
    if (classGroup === "secondary") {
      let matchedStandardObject = secondaryClassData.find(
        (classObj) => classObj.standard === standard
      );
      return matchedStandardObject;
    }
    if (classGroup === "senior-secondary") {
      let matchedStandardObject = seniorSecondaryClassData.find(
        (classObj) => classObj.standard === standard
      );
      return matchedStandardObject;
    }
  };

  if (dataIsPresent) {
    matchedObject = particularStandardDataObjectReturnFunction(
      params.classGroup,
      params.standard
    );
  }

  useEffect(() => {
    if (dataIsPresent) {
      matchedObject = particularStandardDataObjectReturnFunction(
        params.classGroup,
        params.standard
      );
    } else {
      classDataFetcherThunkHandler();
    }
    // eslint-disable-next-line
  }, [dispatch]);

  let contentToDisplay = (
    <ClassDetailsCard
      standard={params.standard}
      classGroup={params.classGroup}
      matchedObject={matchedObject}
    />
  );

  if (loading) {
    contentToDisplay = <LoadingCard className={styles.loadingAndErrorClass} />;
  }

  if (error) {
    contentToDisplay = (
      <ErrorCard
        className={styles.loadingAndErrorClass}
        refreshHandler={classDataFetcherThunkHandler}
      />
    );
  }

  return (
    <MainContent className={styles.classDetailsPageMainContent}>
      {contentToDisplay}
    </MainContent>
  );
};
export default ClassDetailsPage;
