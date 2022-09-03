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
          I am a {" "}
          <Typed
            strings={[
              "UI/UX Designer",
              "Front-End Dev",
              "Back-End Dev",
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
