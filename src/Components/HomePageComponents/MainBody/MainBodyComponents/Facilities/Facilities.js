import Card from "../../../../../UI/Card";
import styles from "./Facilities.module.css";
const Facilities = () => {
  const facilities = [
    "Free of Cost",
    "Time Flexibilty",
    "Location Flexibility",
    "Variety of Course options",
    "Easy to operate",
    "Hassle free",
    "Best video content",
    "24x7 assistance",
    "Self Direction",
  ];
  const facilitiesItem = facilities.map((item) => (
    <Card key={item} className={styles.facilitiesItem}>
      {item}
    </Card>
  ));

  return (
    <Card className={styles.cardWidth}>
      <span className={styles.headerSpan}>FACILITIES</span>

      {facilitiesItem}
    </Card>
  );
};
export default Facilities;
