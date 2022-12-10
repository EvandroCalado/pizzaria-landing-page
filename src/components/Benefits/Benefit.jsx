import styles from "./Benefit.module.scss";

const Benefit = ({ title, subtitle, imageurl }) => {
  return (
    <div className={styles.benefit}>
      {imageurl && <img src={imageurl} alt="icon" />}
      <div className={styles.content}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};

export default Benefit;
