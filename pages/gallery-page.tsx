import type { NextPage } from "next";
import styles from "../styles/GalleryPage.module.scss";
import Gallery from "@components/Gallery";

const GalleryPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>My Pics C</h1>
      </div>
      <div>
        <h1> oming Soon</h1>
      </div>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
