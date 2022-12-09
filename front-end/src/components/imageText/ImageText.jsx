import styles from "./ImageText.module.scss";

const ImageText = ({about}) => {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <img src={about.image_url} alt="About" />
      </div>
      <div className={styles.content}>
        <span>{about.top_title}</span>
        <h2>{about.title}</h2>
        <p>
          {about.text}
        </p>
        <a className="btn btn-primary" href={about.url}>
          {about.button} &rarr;
        </a>
      </div>
    </section>
  );
};

export default ImageText;
