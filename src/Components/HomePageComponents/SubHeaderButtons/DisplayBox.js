import styles from "./DisplayBox.module.css";
import Card from "../../../UI/Card";
import { useParams } from "react-router-dom";
import ImportantAnnouncements from "./ImportantAnnouncements/ImportantAnnouncements";
import HelpDocs from "./HelpDocs/HelpDocs";
import HowToUse from "./HowToUse";

const DisplayBox = () => {
  const params = useParams();

  let contentToDisplay = <span>404 error | not found.</span>;

  if (params.infoType === "important-announcements") {
    contentToDisplay = <ImportantAnnouncements />;
  }
  if (params.infoType === 'help-docs'){
      contentToDisplay = <HelpDocs />
  }
  if (params.infoType === 'use-instructions'){
      contentToDisplay = <HowToUse />
  }

  return <Card className={styles.boxCard}>{contentToDisplay}</Card>;
};

export default DisplayBox;
