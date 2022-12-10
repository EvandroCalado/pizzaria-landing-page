import { useState } from "react";
import { useEffect } from "react";
import styles from "./Navbar.module.scss";
import NavLinks from "./NavLinks";

const Navbar = ({ logos }) => {
  const [isNavbarShow, setIsNavbarShow] = useState(false);

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

  return (
    <section
      className={`${styles["navbar-wrapper"]} ${isNavbarShow && styles.active}`}
    >
      <div className={styles.navbar}>
        <a href="#">
          <img src={logos.logo2_url} alt="Logo" />
        </a>
        <nav className={styles.links}>
          <NavLinks />
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
