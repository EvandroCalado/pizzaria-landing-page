import styles from "./ImageText.module.scss";

const ImageText = ({ data, id }) => {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.image}>
        {data.image_url && <img src={data.image_url} alt="About" />}
      </div>
      <div className={styles.content}>
        <span>{data.top_title}</span>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        {data.email && <p>{data.email}</p>}
        {data.number && <p>{data.number}</p>}
        <a className="btn btn-primary" href={data.url}>
          {data.button} &rarr;
        </a>
      </div>
    </section>
  );
};

export default ImageText;
