import styles from "./FollowUs.module.css";
import {
  FaTwitter,
  FaInstagram,
  FaQuora,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineLinkedin, AiFillFacebook } from "react-icons/ai";
const FollowUs = () => {
  return (
    <>
      <span className={styles.headerSpan}>Follow us</span>

      <span className={styles.subTextSpan}>
        <FaTwitter className={styles.icon} />
        <FaInstagram className={styles.icon} />
        <AiOutlineLinkedin className={styles.icon} />
        <AiFillFacebook className={styles.icon} />
        <FaQuora className={styles.icon} />
        <FaPinterest className={styles.icon} />
        <a href="https://wa.me/9876543210" target="_blank" rel='noreferrer'>
          <FaWhatsapp className={styles.icon} />
        </a>
      </span>
    </>
  );
};
export default FollowUs;
