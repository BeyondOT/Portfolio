import InfoCard from "../cards/infoCard/InfoCard";
import ProjectCard from "../cards/projectCard/ProjectCard";
import SkillProgressionCard from "../cards/skillProgressionCard/SkillProgressionCard";
import styles from "./about.module.scss";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={`${styles.container} container`}>
        <section className={styles.section}>
          <div className={styles.header}>
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
        <section className={styles.section}>
          <div className={styles.header}>
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
        <section className={styles.section}>
          <div className={styles.header}>
            <h2>Projets</h2>
          </div>
          <div className={styles.projects}>
            <ProjectCard title="First Project" content="This is my first project. It does this and that."/>
            <ProjectCard title="Second Project" content="This is my second project. It does this and that."/>
            <ProjectCard title="Third Project" content="This is my third project. It does this and that."/>
          </div>

        </section>
      </div>
    </section>
  );
};

export default About;
