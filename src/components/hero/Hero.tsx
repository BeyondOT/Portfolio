import Typed from "react-typed";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div
        className={`${styles.container} container`}
        data-aos="zoom-int"
        data-aos-delay="100"
      >
        <h1>Ashrough</h1>
        <p>
          Je suis{" "}
          <Typed
            strings={[
              "Designer UI/UX",
              "Développeur Front-End",
              "Développeur Back-end",
              "Try-Hard Gamer",
            ]}
            typeSpeed={20}
            backSpeed={20}
            backDelay={4000}
            loop
          />
        </p>
        <div className="socials"></div>
      </div>
    </section>
  );
};
export default Hero;
