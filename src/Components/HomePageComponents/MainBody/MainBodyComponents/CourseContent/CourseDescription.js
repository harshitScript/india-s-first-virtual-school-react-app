import Card from "../../../../../UI/Card";
import styles from "./CourseDescription.module.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CourseDescBookIcon from "../../../../../Icons/CourseDescBookIcon";
import CourseOutcome from "./CourseOutcome";
import PrimaryClass from "./PrimaryClass";
import SecondaryClass from "./SecondaryClass";
import SeniorSecondaryClass from "./SeniorSecondaryClass";
import MiddleClass from "./MiddleClass";
import { useDispatch } from "react-redux";
import classDataFetcherThunk from "../../../../../ReduxStore/class-data-fetcher-thunk";
import { useEffect, useCallback } from "react";

const CourseDescription = () => {
  const match = useRouteMatch();
  const disptach = useDispatch();

  const classDataFetcherThunkHandler = useCallback(() => {
    disptach(classDataFetcherThunk());
  }, [disptach]);

  useEffect(() => {
    classDataFetcherThunkHandler();
  }, [classDataFetcherThunkHandler]);

  return (
    <Card className={styles.courseDescCard}>
      <div className={styles.iconContainer}>
        <CourseDescBookIcon />
      </div>

      <div className={styles.classDescDiv}>
        <Switch>
          <Route path={match.path} exact>
            <CourseOutcome />
          </Route>
          <Route path={`${match.path}/primary`}>
            <PrimaryClass
              classDataFetcherThunkHandler={classDataFetcherThunkHandler}
            />
          </Route>
          <Route path={`${match.path}/middle`}>
            <MiddleClass
              classDataFetcherThunkHandler={classDataFetcherThunkHandler}
            />
          </Route>
          <Route path={`${match.path}/secondary`}>
            <SecondaryClass
              classDataFetcherThunkHandler={classDataFetcherThunkHandler}
            />
          </Route>
          <Route path={`${match.path}/senior-secondary`}>
            <SeniorSecondaryClass
              classDataFetcherThunkHandler={classDataFetcherThunkHandler}
            />
          </Route>
          <Route path="*">
            <CourseOutcome />
          </Route>
        </Switch>
      </div>
    </Card>
  );
};
export default CourseDescription;
