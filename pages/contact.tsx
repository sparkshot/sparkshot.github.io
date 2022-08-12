import type { NextPage } from "next";
import styles from "../styles/Contact.module.scss";

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>
        Hit me up
        <span role="img" aria-label="face">
          📼 📷 📸 📹 🎥 📽
        </span>
        <p className={styles.textString}>
          See you soon
          <span role="img" aria-label="sheep">
            🐑
          </span>
        </p>
      </h1>
    </div>
  );
};

export default Contact;
