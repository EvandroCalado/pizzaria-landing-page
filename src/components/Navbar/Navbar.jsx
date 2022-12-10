import { useState } from "react";
import { useEffect } from "react";
import styles from "./Navbar.module.scss";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ logos }) => {
  const [isNavbarShow, setIsNavbarShow] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const setNavbarHendler = () => {
      if (window.scrollY >= 150) {
        return setIsNavbarShow(true);
      }
      return setIsNavbarShow(false);
    };

    document.addEventListener("scroll", setNavbarHendler);

    return () => {
      document.removeEventListener("scroll", setNavbarHendler);
    };
  }, []);

  const toggleMenuHandler = () => setIsMenu(!isMenu);

  return (
    <section
      className={`${styles["navbar-wrapper"]} ${isNavbarShow && styles.active}`}
    >
      <div className={styles.navbar}>
        <a href="#">
          <img src={logos.logo2_url} alt="Logo" />
        </a>
        <nav className={styles.links}>
          <NavLinks toggleMenu={null} />
        </nav>
        <GiHamburgerMenu onClick={toggleMenuHandler} className={styles.icon} />
        <nav className={`${styles.burger} ${isMenu && styles.active}`}>
          <NavLinks toggleMenu={toggleMenuHandler} />
        </nav>
        <div
          className={`${styles.background} ${isMenu && styles.active}`}
        ></div>
      </div>
    </section>
  );
};

export default Navbar;
