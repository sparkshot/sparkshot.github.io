import styles from "../styles/components/Footer.module.scss";
import { FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <span className={styles.brandName}>Sparkshot Media</span>
          <span className={styles.tagline}>
            Luxury Real Estate & Portait | Photography & Videography
          </span>
        </div>
        <div className={styles.social}>
          <a
            href="https://www.instagram.com/sparkshott/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copyright}>
          &copy; {new Date().getFullYear()} Sparkshot Media. All rights
          reserved.
        </span>
        <button onClick={scrollToTop} className={styles.backToTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
