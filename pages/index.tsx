import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sparkshot Media</title>
      </Head>
      <div className={styles.entireView}>
        <div className={styles.main}>
          <h1 className={styles.name}>
            <em>Sparkshot Media</em>
          </h1>
        </div>
        <div className="magictime puffIn">Photography Is What I Do</div>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
};

export default Home;
