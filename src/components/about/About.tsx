import InfoCard from "../cards/infoCard/InfoCard";
import SkillProgressionCard from "../cards/skillProgressionCard/SkillProgressionCard";
import styles from "./about.module.scss";

import Divider from "../divider/Divider";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <Divider nameOfClass={styles.divider} />
      <div className={`${styles.container} container`}>
        <section data-aos="fade-up" className="section">
          <div className="header">
            <h2>Qui suis-je</h2>
            <p>
              Je suis étudiant en informatique à l'université de Strasbourg.
              Future Full-Stack Developper !
            </p>
          </div>
          <ul className={styles.infos}>
            <div className={styles.line}>
              <InfoCard
                title="Site: "
                content="ashrough.fr"
                link="https://ashrough.fr"
              />
              <InfoCard title="Localisation: " content="Strasbourg" />
            </div>
            <div className={styles.line}>
              <InfoCard title="Age: " content="23 ans" />
              <InfoCard title="E-mail: " content="info@ashrough.fr" />
            </div>
          </ul>
        </section>
        <section data-aos="fade-up" className="section">
          <div className="header">
            <h2>Skills</h2>
            <p>L'informatique. Ma passion.</p>
          </div>
          <div className={styles.skills}>
            <SkillProgressionCard title="HTML/CSS" progression="95%" />
            <SkillProgressionCard title="React JS" progression="90%" />
            <SkillProgressionCard
              title="Redux/ReduxToolkit"
              progression="85%"
            />
            <SkillProgressionCard title="NodeJS/ExpressJS" progression="80%" />
            <SkillProgressionCard title="Python" progression="80%" />
            <SkillProgressionCard title="Typescript" progression="80%" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
