import { useEffect, useState } from "react";
import styles from "@styles/components/Hero.module.scss";

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.background} />
      <div className={styles.overlay} />
      <div className={`${styles.content} ${loaded ? styles.visible : ""}`}>
        <h1 className={styles.title}>Sparkshot Media</h1>
        <p className={styles.subtitle}>Photography & Videography</p>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
