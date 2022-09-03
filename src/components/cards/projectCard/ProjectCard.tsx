import styles from "./project.module.scss";

interface Props {
  title: string;
  image?: string;
  content: string;
}
const ProjectCard: React.FC<Props> = ({ title, image, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
        <a href="/" className={styles.button}>
          Learn More
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
