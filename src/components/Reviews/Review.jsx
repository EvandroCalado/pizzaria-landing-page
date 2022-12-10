import styles from "./Review.module.scss";

const Review = ({ name, review, image }) => {
  return (
    <div className={styles.review}>
      <div className={styles.avatar}>
        <img src={image} alt="Avatar" />
      </div>
      <span>{name}</span>
      <p>{review}</p>
    </div>
  );
};

export default Review;
