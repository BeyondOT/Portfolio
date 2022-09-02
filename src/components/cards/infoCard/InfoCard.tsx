import { BiRightArrow } from "react-icons/bi";
import styles from "./infocard.module.scss";

interface Props {
  title: string;
  content: string;
  link?: string;
}

const InfoCard: React.FC<Props> = ({ title, content, link }) => {
  return (
    <div className={styles.container}>
      <BiRightArrow
        style={{
          verticalAlign: "middle",
          marginRight: "10px",
          marginBottom: "4px",
        }}
        className={styles.arrow}
      />
      <span>{title}</span>
      {link ? (
        <span><a href={link}>{content}</a></span>
      ) : (
        <span className={styles.content}>{content}</span>
      )}
    </div>
  );
};
export default InfoCard;
