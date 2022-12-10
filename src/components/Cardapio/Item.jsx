import styles from "./Item.module.scss";

const Item = ({ image, title, category }) => {
  return (
    <div className={styles.item}>
      {image && <img src={image} alt="Cardapio" />}
      <h3>{category}</h3>
      <h4>{title}</h4>
    </div>
  );
};

export default Item;
