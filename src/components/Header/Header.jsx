import styles from "./Header.module.scss";

const Header = ({ header }) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>{header.title}</h1>
        <p>{header.subtitle}</p>
      </div>
      <div className={styles.image}>
        {header.imageurl && <img src={header.imageurl} alt="Pizza" />}
      </div>
    </header>
  );
};

export default Header;
