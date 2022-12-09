import styles from "./Cardapio.module.scss";
import Item from "./Item";

const Cardapio = ({ cardapio }) => {
  const renderItems = cardapio.map((item, index) => {
    return (
      <Item
        key={index}
        category={item.category}
        title={item.title}
        image={item.image_url}
      />
    );
  });
  return (
    <section className={styles["cardapio-wrapper"]}>
      <div className={styles.cardapio}>
        <h2 className="gold">No Cardápio</h2>
        <div className={styles.items}>{renderItems}</div>
      </div>
    </section>
  );
};

export default Cardapio;
