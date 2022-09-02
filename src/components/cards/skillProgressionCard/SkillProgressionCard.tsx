import { FC } from "react";
import styles from "./skill.module.scss";

interface Props {
  title: string;
  progression: string;
}

const SkillProgressionCard:FC<Props> = ({title, progression}) => {
  return (
    <div className={styles.progressCard}>
      <h4 className={styles.title}>{title}</h4>
      <h4 className={styles.percentage}>{progression}</h4>
      <div className={styles.progressBarWrap}>
        <div className={styles.progressBar} style={{ width: progression }}></div>
      </div>
    </div>
  );
};
export default SkillProgressionCard;
