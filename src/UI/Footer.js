import styles from "./Footer.module.css";
const Footer = (props) => {
  return (
    <div className={`${props.className} ${styles.footerDiv}`}>
      <span>@2021 India's First Virtual School inc.</span>
    </div>
  );
};
export default Footer;
