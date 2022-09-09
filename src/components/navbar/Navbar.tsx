import { FC, ReactElement, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import styles from "./navbar.module.scss";

interface Props {
  icon: ReactElement;
  title: string;
  link: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavButton: FC<Props> = ({ icon, title, link }) => {
    return (
      <a
        href={`#${link}`}
        className={styles.button}
        onClick={() => setIsOpen(false)}
      >
        <div className={styles.icon}>{icon}</div>
        <span className={styles.title} title={title}>
          {title}
        </span>
      </a>
    );
  };

  return (
    <>
      <span className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </span>
      <nav className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
        <NavButton icon={<AiOutlineHome />} title="Home" link="home" />
        <NavButton icon={<BsPerson />} title="About" link="about" />
        <NavButton
          icon={<AiOutlineFundProjectionScreen />}
          title="Projects"
          link="projects"
        />
        <NavButton icon={<AiOutlineMail />} title="Contact" link="contact" />
      </nav>
    </>
  );
};
export default Navbar;
