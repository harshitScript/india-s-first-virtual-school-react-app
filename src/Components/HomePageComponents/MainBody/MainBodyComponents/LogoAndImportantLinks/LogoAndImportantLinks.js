import styles from "./LogoAndImportantLinks.module.css";
import Card from "../../../../../UI/Card";
import ifvsLogo from "../../../../../Assets/ifvslogo.jpg";
import ImpLinkObj from "../../../../../DataModels/imp-links";
import ImpLinkCard from "./ImpLinkCard";

const LogoAndImportantLinks = () => {
  const impLinksList = [
    new ImpLinkObj(Math.random().toFixed(3), "Imp-Link 1", "#"),
    new ImpLinkObj(Math.random().toFixed(3), "Imp-Link 2", "#"),
    new ImpLinkObj(Math.random().toFixed(3), "Imp-Link 3", "#"),
    new ImpLinkObj(Math.random().toFixed(3), "Imp-Link 4", "#"),
  ];

  const impLinksCards = impLinksList.map((linkObj) => (
    <ImpLinkCard key={linkObj.id} title={linkObj.title} href={linkObj.href} />
  ));

  return (
    <Card className={styles.cardWidth}>
      <span className={styles.impLinksSpan}>Important links</span>

      <div className={styles.logoImage}>
        <img src={ifvsLogo} loading="lazy" alt="ifvs logo" width="50%" />
      </div>

      {impLinksCards}
    </Card>
  );
};
export default LogoAndImportantLinks;
