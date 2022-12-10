import styles from "./NavLinks.module.scss";

const NavLinks = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="#about">Sobre nós</a>
      </li>
      <li>
        <a href="#reviews">Depoimentos</a>
      </li>
      <li>
        <a href="#location">Localização</a>
      </li>
      <li>
        <a href="#menu">Menu</a>
      </li>
    </ul>
  );
};

export default NavLinks;
