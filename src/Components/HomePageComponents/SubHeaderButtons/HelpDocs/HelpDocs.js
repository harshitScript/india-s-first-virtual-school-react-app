import { useSelector } from "react-redux";
import styles from "./HelpDocs.module.css";
import HelpOrQueryElement from "./HelpOrQueryElement";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import helpDocsThunk from "../../../../ReduxStore/help-docs-thunk";
import { useCallback } from "react";
import LoadingCard from "../../../../UI/LoadingCard";
import ErrorCard from "../../../../UI/ErrorCard";
const HelpDocs = () => {
  const [helpDocsList, loading, error] = useSelector((state) => [
    state.helpDocs.helpDocsList,
    state.helpDocs.loading,
    state.helpDocs.error,
  ]);
  const disptach = useDispatch();

  const helpDocsThunkHandler = useCallback(() => {
    disptach(helpDocsThunk());
  }, [disptach]);

  let contentToDisplay = helpDocsList.map((helpObj) => (
    <HelpOrQueryElement title={helpObj.query} description={helpObj.desc} />
  ));

  if (loading) {
    contentToDisplay = <LoadingCard className={styles.loadingOrErrorCard} />;
  }
  if (error) {
    contentToDisplay = (
      <ErrorCard
        refreshHandler={helpDocsThunkHandler}
        className={styles.loadingOrErrorCard}
      />
    );
  }

  useEffect(() => {
    helpDocsThunkHandler();
  }, [helpDocsThunkHandler]);

  return (
    <>
      <span className={styles.headerSpan}>{"Help & Queries"}</span>
      <hr />
      {contentToDisplay}
    </>
  );
};
export default HelpDocs;
