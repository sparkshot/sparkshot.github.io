import type { NextPage } from "next";
import styles from "../styles/Contact.module.scss";

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>
        If you're a hot girl, hit me up. I wear an upside down sweater when I'm
        chilling at my crib{" "}
        <span role="img" aria-label="face">
          😏
        </span>
        <p className={styles.textString}>
          How will we meet you ask? Just yell really loud when you get to
          woodside station. I'll come get u{" "}
          <span role="img" aria-label="sheep">
            🐑
          </span>
        </p>
      </h1>
    </div>
  );
};

export default Contact;
