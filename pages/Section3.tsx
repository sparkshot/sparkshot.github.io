import type { NextPage } from "next";
import styles from "../styles/Section3.module.scss";
import Gallery from "@components/Gallery";
import Link from "next/link";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const Section3: NextPage = () => {
  return (
    <div id="projects" className={styles.container}>
      <hr className={styles.topBar}></hr>
      <div className={styles.headingRow}>
        <h1 className={styles.heading}>PROJECTS</h1>
        <Link
          href="https://www.instagram.com/sparkshott/"
          className={styles.headingLink}
        >
          SHOW ALL <BsFillArrowUpRightCircleFill className={styles.icon} />
        </Link>
      </div>
      <Gallery className={styles.gallery} />
    </div>
  );
};

export default Section3;
