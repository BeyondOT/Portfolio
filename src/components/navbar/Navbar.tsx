import { FC, ReactElement, useState } from "react";
import {
  AiOutlineBulb,
  AiOutlineClose,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineMenu,
} from "react-icons/ai";
import styles from "./navbar.module.scss";

interface Props {
  icon: ReactElement;
  title: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const NavButton: FC<Props> = ({ icon, title }) => {
    return (
      <a
        href="#skills"
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
      <nav
        className={`${styles.navbar} ${isOpen ? styles.active : ""}`}
      >
        <NavButton icon={<AiOutlineHome />} title="Home" />
        <NavButton icon={<AiOutlineBulb />} title="Skills" />
        <NavButton icon={<AiOutlineFundProjectionScreen />} title="Projects" />
      </nav>
    </>
  );
};
export default Navbar;
