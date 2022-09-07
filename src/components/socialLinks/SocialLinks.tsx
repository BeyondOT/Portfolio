import { ReactElement } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./social.module.scss";
interface Props {
  link: string;
  icon: ReactElement;
}
const SocialLinks = () => {
  const SocialButton: React.FC<Props> = ({ icon, link }) => {
    return (
      <a href={link} className={styles.button}>
        {icon}
      </a>
    );
  };
  return (
    <div className={styles.container}>
      <SocialButton icon={<FaDiscord />} link="/" />
      <SocialButton icon={<FaGithub />} link="/" />
      <SocialButton icon={<FaLinkedin />} link="/" />
    </div>
  );
};
export default SocialLinks;
