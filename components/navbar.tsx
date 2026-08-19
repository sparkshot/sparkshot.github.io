import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import styles from "../styles/components/Navbar.module.scss";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.navbarTitle}>
        <ExportedImage
          src="/icons8-camera-snap_white_outline.gif"
          width={40}
          height={40}
          alt="Sparkshot Media"
          className={styles.navbarIcon}
          unoptimized={true}
        />
        Sparkshot Media
      </Link>
      <a
        href="https://www.instagram.com/sparkshott/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.instagramLink}
      >
        <FaInstagram className={styles.instagramIcon} />
      </a>
    </nav>
  );
};

export default Navbar;
