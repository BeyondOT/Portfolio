import styles from "./form.module.scss";

const Form = () => {
  return (
    <form className={`${styles.form} form`}>
      <input type="text" placeholder="Name..." />

      <input type="text" placeholder="Email..." />

      <input type="text" placeholder="Sujet..." className={styles.subject} />

      <textarea className={styles.message} placeholder="Message..." />
    </form>
  );
};
export default Form;
