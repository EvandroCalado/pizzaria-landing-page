import Benefit from "./Benefit";
import styles from "./Benefits.module.scss";

const Benefits = ({ benefits }) => {
  const {
    title: title1,
    subtitle: subtitle1,
    imageUrl: imageUrl1,
  } = benefits[0];
  const {
    title: title2,
    subtitle: subtitle2,
    imageUrl: imageUrl2,
  } = benefits[1];
  const {
    title: title3,
    subtitle: subtitle3,
    imageUrl: imageUrl3,
  } = benefits[2];

  return (
    <section className={styles.benefits}>
      <div className={styles.top}>
        <Benefit title={title2} subtitle={subtitle2} imageurl={imageUrl2} />
        <Benefit title={title1} subtitle={subtitle1} imageurl={imageUrl1} />
      </div>
      <div className={styles.bottom}>
        <Benefit title={title3} subtitle={subtitle3} imageurl={imageUrl3} />
      </div>
    </section>
  );
};

export default Benefits;
