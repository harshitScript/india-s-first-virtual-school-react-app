import ContactUs from "./ContactUs/ContactUs";
import FollowUs from "./FollowUs/FollowUs";
import Location from "./Location/Location";
import styles from "./SubBody.module.css";
const SubBody = () => {
  return (
    <div className={styles.subBodyDiv}>
      <div>
        <FollowUs />
      </div>
      <div>
        <Location />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        support
        <br />
        gagga
      </div>
    </div>
  );
};
export default SubBody;
