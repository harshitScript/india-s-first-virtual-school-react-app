import useClassGroupData from "../../../../../Hooks/use-class-group-data";
const PrimaryClass = (props) => {
  const contentToDisplay = useClassGroupData(
    (state, type) => {
      return state[type];
    },
    "primaryClassData",
    props.classDataFetcherThunkHandler,
    "primary"
  );
  return <>{contentToDisplay}</>;
};

export default PrimaryClass;
