import styles from "./ImportantAnnouncements.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import importantAnnouncementThunk from "../../../../ReduxStore/important-announcements-fetcher-thunk";
import LoadingCard from "../../../../UI/LoadingCard";
import ErrorCard from "../../../../UI/ErrorCard";
import { useCallback } from "react";

const ImportantAnnouncements = () => {
  const [announcements, loading, error] = useSelector((state) => [
    state.importantAnnouncements.announcements,
    state.importantAnnouncements.loading,
    state.importantAnnouncements.error,
  ]);
  const dispatch = useDispatch();

  const importantAnnouncementThunkHandler = useCallback(() => {
    dispatch(importantAnnouncementThunk());
  }, [dispatch]);

  useEffect(() => {
    importantAnnouncementThunkHandler();
  }, [importantAnnouncementThunkHandler]);

  let contentToDisplay = (
    <span className={styles.noAnnouncmnetsSpan}>No announcements now.</span>
  );

  if (announcements.length > 0 && !loading && !error) {
    contentToDisplay = (
      <ul>
        {announcements.map((singleObj) => (
          <li className={styles.announcementMsgListItem} key={singleObj.id}>
            {singleObj.announcment}{" "}
            <a href={singleObj.link} target="_blank" rel="noreferrer">
              {singleObj.linkText}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  if (loading) {
    contentToDisplay = <LoadingCard className={styles.loadingCard} />;
  }

  if (error) {
    contentToDisplay = (
      <ErrorCard
        refreshHandler={importantAnnouncementThunkHandler}
        className={styles.errorCard}
      />
    );
  }

  return (
    <>
      <span className={styles.headerSpan}>Important announcements</span>
      <hr />
      {contentToDisplay}
    </>
  );
};
export default ImportantAnnouncements;
