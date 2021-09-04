import MainContent from "../../UI/MainContent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import userDataObjectSliceThunk from "../../ReduxStore/user-data-object-thunk";
import { useCallback, useEffect } from "react";
import DashBoardHeader from "../../Components/CoursePageComponents/DashBoardHeader";
import CourseCard from "../../Components/CoursePageComponents/CourseCard";
import classDataFetcherThunk from "../../ReduxStore/class-data-fetcher-thunk";
const CoursePage = () => {
  const dispatch = useDispatch();

  //TAKING USERS INFORMATION FROM USERDATASLICE.
  const [currentUserObject, userDataLoading, userdataIsPresent] = useSelector(
    (state) => [
      state.userData.currentUserObject,
      state.userData.loading,
      state.userData.dataIsPresent,
    ]
  );

  const userDataObjectSliceThunkHandler = useCallback(() => {
    dispatch(userDataObjectSliceThunk());
  }, [dispatch]);

  // CHECKING CONDITION FOR WHICH CLASS GROUP TO FETCH.
  let classGroupToFetch = "primaryClassData";
  if (currentUserObject.class === "Fifth" || "Sixth" || "Seventh") {
    classGroupToFetch = "middleClassData";
  }
  if (currentUserObject.class === "Eight" || "Ninth" || "Tenth") {
    classGroupToFetch = "secondaryClassData";
  }
  if (
    currentUserObject.class === "Eleventh-Commerce" ||
    "Eleventh-PCM" ||
    "Eleveth-PCB" ||
    "Eleventh-PCMB" ||
    "Twelfth-Commerce" ||
    "Twelfth-PCB" ||
    "Twelfth-PCM" ||
    "Twelfth-PCMB"
  ) {
    classGroupToFetch = "seniorSecondaryClassData";
  }

  // GETTING CLASSGROUP DATA FROM CLASSGROUPSLICE
  const [
    matchedClassGroupList,
    classDataLoading,
    classDataError,
    classDataIsPresent,
  ] = useSelector((state) => [
    state.classData[classGroupToFetch],
    state.classData.loading,
    state.classData.error,
    state.classData.dataIsPresent,
  ]);

  // FETCHING SUBJECTS LIST FROM MATCHING CLASS
  let matchedSubjects = [];
  if (matchedClassGroupList.length > 0) {
    const matchedClassObject = matchedClassGroupList.find(
      (classObj) => classObj.standard === currentUserObject.class
    );
    matchedSubjects = matchedClassObject.subjects;
  }

  const classDataFetcherThunkHandler = useCallback(() => {
    dispatch(classDataFetcherThunk());
  }, [dispatch]);

  useEffect(() => {
    if (userdataIsPresent === false) {
      userDataObjectSliceThunkHandler();
    }
    if (classDataIsPresent === false) {
      classDataFetcherThunkHandler();
    }
  }, [
    userDataObjectSliceThunkHandler,
    userdataIsPresent,
    classDataIsPresent,
    classDataFetcherThunkHandler,
  ]);

  return (
    <MainContent>
      <DashBoardHeader
        studentName={currentUserObject.studentName}
        standard={currentUserObject.class}
        loading={userDataLoading}
        userDataObjectSliceThunkHandler={userDataObjectSliceThunkHandler}
      />
      <CourseCard
        subjects={matchedSubjects}
        loading={classDataLoading}
        error={classDataError}
        classDataFetcherThunkHandler={classDataFetcherThunkHandler}
      />
    </MainContent>
  );
};
export default CoursePage;
