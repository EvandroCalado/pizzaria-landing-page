import styles from "./Footer.module.scss";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = ({ logos, footer }) => {
  const renderLinks = footer.link.map((link, index) => {
    return (
      <li key={index}>
        <a href={link.url}>{link.title}</a>
      </li>
    );
  });

  const renderContato = footer.contato.map((item, index) => {
    return <li key={index}>{item.text}</li>;
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.main}>
          <a href="#">
            {logos.logo1_url && <img src={logos.logo1_url} alt="Logo" />}
          </a>
          <h3>{footer.text}</h3>
          <ul>
            <li>
              <a href={footer.instagram}>
                <FaInstagramSquare className="icon" />
              </a>
            </li>
            <li>
              <a href={footer.facebook}>
                <FaFacebookSquare className="icon" />
              </a>
            </li>
            <li>
              <a href={footer.youtube}>
                <FaYoutubeSquare className="icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <h2>Links</h2>
          <ul>{renderLinks}</ul>
        </div>
        <div className={styles.contact}>
          <h2>Contato</h2>
          <ul>{renderContato}</ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Ducca Massas - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
