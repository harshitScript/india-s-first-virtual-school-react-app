import styles from "./ContactUs.module.css";
const ContactUs = () => {
  return (
    <>
      <span className={styles.headerSpan}>Contact us</span>
      <span className={styles.subTextSpan}>
        Call : &nbsp;
        <a href="tel:9876543210">+91-9876543210</a>
      </span>
      <span className={styles.subTextSpan}>
        Email : &nbsp;
        <a href="mailto:www.ifvs2021@gmail.com">
          www.ifvs2021@gmail.com
        </a>
      </span>
    </>
  );
};
export default ContactUs;
