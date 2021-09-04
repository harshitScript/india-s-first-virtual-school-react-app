import useClassGroupData from "../../../../../Hooks/use-class-group-data";
const SecondaryClass = (props) => {
  const contentToDisplay = useClassGroupData(
    (state, type) => {
      return state[type];
    },
    "secondaryClassData",
    props.classDataFetcherThunkHandler,
    "secondary"
  );
  return <>{contentToDisplay}</>;
};

export default SecondaryClass;
