import useClassGroupData from "../../../../../Hooks/use-class-group-data";
const MiddleClass = (props) => {
  const contentToDisplay = useClassGroupData(
    (state, type) => {
      return state[type];
    },
    "middleClassData",
    props.classDataFetcherThunkHandler,
    "middle"
  );
  return <>{contentToDisplay}</>;
};
export default MiddleClass;
