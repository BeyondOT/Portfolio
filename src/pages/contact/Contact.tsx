import Divider from "../../components/divider/Divider";
import Form from "../../components/form/Form";
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={`${styles.section} section`}>
      <Divider nameOfClass={styles.divider} />
      <div className={`${styles.header} header`}>
        <h2>Contact Me</h2>
        <div className={`${styles.container} container`}>
          <div className={`${styles.left}`}>
            <img src="./assets/contact.svg" alt="ContactUs" className="contactsvg"/>
          </div>
          <div className={`${styles.right}`}>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
