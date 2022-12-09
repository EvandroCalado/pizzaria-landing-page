import styles from "./Item.module.scss";

const Item = () => {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <h3>A Receita</h3>
        <h4>integrante 1, integrante 2</h4>
      </div>
      <div className={styles.divisor}>
        <h5>R$59,90</h5>
      </div>
    </li>
  );
};

export default Item;
