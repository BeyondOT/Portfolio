import SocialLinks from "../socialLinks/SocialLinks";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.container} container`}>
        <h2>Ashrough</h2>
        <div className={styles.socials}>
          <SocialLinks />
        </div>
        <p>
          © Copyright <span>Ashrough</span>. All rights reserved.
        </p>
        <p>
          Designed by <span>Ashrough</span>/<span>YouYou</span>
        </p>
      </div>
    </div>
  );
};
export default Footer;
