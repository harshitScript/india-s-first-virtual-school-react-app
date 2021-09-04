import Card from "../../UI/Card";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import TitleAndDescription from "./TitleAndDescription";
import styles from "./DisplayBox.module.css";
import { useSelector } from "react-redux";

const DisplayBox = (props) => {
  const aboutUsData = useSelector((state) => state.aboutUs.aboutUsData);
  const match = useRouteMatch();
  return (
    <Card className={styles.displayBoxCard}>
      <Switch>
        <Route path={match.path} exact>
          <Redirect to={`${match.path}/about-ifvs`} />
        </Route>
        <Route path={`${match.path}/about-ifvs`}>
          <TitleAndDescription
            header={aboutUsData[0].header}
            desc={aboutUsData[0].desc}
          />
        </Route>
        <Route path={`${match.path}/about-online-education`}>
          <TitleAndDescription
            header={aboutUsData[1].header}
            desc={aboutUsData[1].desc}
          />
        </Route>
        <Route path="*">
          <span className={styles.errorSpan}>404 | not found</span>
        </Route>
      </Switch>
    </Card>
  );
};
export default DisplayBox;
