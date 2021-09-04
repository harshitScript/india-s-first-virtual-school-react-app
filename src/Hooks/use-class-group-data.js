import { useSelector } from "react-redux";
import LoadingCard from "../UI/LoadingCard";
import ErrorCard from "../UI/ErrorCard";
import ClassCard from "../Components/HomePageComponents/MainBody/MainBodyComponents/CourseContent/ClassCard";
import styles from "./use-class-group-data.module.css";

const useClassGroupData = (
  classGroupTypeFunction,
  classDataStateName,
  classDataFetcherThunkHandler,
  classGroup
) => {
  const [classData, loading, error] = useSelector((state) => {
    return [
      classGroupTypeFunction(state.classData, classDataStateName),
      state.classData.loading,
      state.classData.error,
    ];
  });

  let contentToDisplay = classData.map((pClass) => {
    return (
      <ClassCard
        className={styles.classCard}
        key={pClass.standard}
        standard={pClass.standard}
        subject={pClass.subjects}
        classGroup={classGroup}
      />
    );
  });

  if (loading) {
    contentToDisplay = <LoadingCard className={styles.loadingCard} />;
  }

  if (error) {
    contentToDisplay = (
      <ErrorCard
        refreshHandler={classDataFetcherThunkHandler}
        className={styles.errorCard}
      />
    );
  }

  return contentToDisplay;
};
export default useClassGroupData;
