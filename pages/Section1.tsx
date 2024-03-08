import type { NextPage } from "next";
import styles from "../styles/Section1.module.scss";

const Section1: NextPage = () => {
  return (
    <div id="about-me" className={styles.container}>
      <h1 className={styles.heading}>About Me</h1>
      <div className={styles.description}>
        Starting his career in real estate photograph in 2019, it was on the
        sets of luxury condominiums in the heart of New York City that Shawn
        mastered the technicalities of putting his vision onto the lens, and
        eventually on the landing pages of apartment advertisements. Having
        always been drawn to stylistic photography that uses the environment to
        perfectly highlight the subject, Shawn applied his mastery and
        experience-based skills to being different living spaces to life in
        photo and video.
      </div>
    </div>
  );
};

export default Section1;
