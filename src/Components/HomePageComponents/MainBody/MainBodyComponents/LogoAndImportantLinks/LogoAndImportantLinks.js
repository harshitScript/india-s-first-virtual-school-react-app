import styles from "./LogoAndImportantLinks.module.css";
import Card from "../../../../../UI/Card";
import ifvsLogo from "../../../../../Assets/ifvslogo.jpg";
import { useDispatch } from "react-redux";
import importantLinksFetcherThunk from "../../../../../ReduxStore/important-links-slice-fetcher-thunk";
import ImpLinkCard from "./ImpLinkCard";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import LoadingCard from "../../../../../UI/LoadingCard";
import ErrorCard from "../../../../../UI/ErrorCard";

const LogoAndImportantLinks = () => {
  const dispatch = useDispatch();

  const [importantLinks, loading, error] = useSelector((state) => [
    state.importantLinks.importantLinks,
    state.importantLinks.loading,
    state.importantLinks.error,
  ]);

  const importantLinksFetcherThunkHandler = useCallback(() => {
    dispatch(importantLinksFetcherThunk());
  }, [dispatch]);

  useEffect(() => {
    importantLinksFetcherThunkHandler();
  }, [importantLinksFetcherThunkHandler]);

  let contentToDisplay = importantLinks.map((linkObj) => (
    <ImpLinkCard key={linkObj.id} title={linkObj.title} href={linkObj.href} />
  ));
  if (loading) {
    contentToDisplay = <LoadingCard className={styles.loadingAndErrorCard} />;
  }
  if (error) {
    contentToDisplay = (
      <ErrorCard
        refreshHandler={importantLinksFetcherThunkHandler}
        className={styles.loadingAndErrorCard}
      />
    );
  }

  return (
    <Card className={styles.cardWidth}>
      <span className={styles.impLinksSpan}>Important links</span>

      <div className={styles.logoImage}>
        <img src={ifvsLogo} loading="lazy" alt="ifvs logo" width="50%" />
      </div>

      {contentToDisplay}
    </Card>
  );
};
export default LogoAndImportantLinks;
