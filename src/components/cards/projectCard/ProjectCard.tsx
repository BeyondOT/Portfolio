import styles from "./project.module.scss";

interface Props {
  title: string;
  image?: string;
  content: string;
  link?: string;
}
const ProjectCard: React.FC<Props> = ({ title, image, content, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
        <a
          href={link}
          className={styles.button}
          target="_blank"
          rel="noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
