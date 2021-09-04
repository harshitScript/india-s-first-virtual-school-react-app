
import useClassGroupData from "../../../../../Hooks/use-class-group-data";
const SeniorSecondaryClass = (props) => {
  const contentToDisplay = useClassGroupData(
    (state, type) => {
      return state[type];
    },
    "seniorSecondaryClassData",
    props.classDataFetcherThunkHandler,
    "senior-secondary"
  );
  return <>{contentToDisplay}</>;
};

export default SeniorSecondaryClass;
