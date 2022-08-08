import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sparkshot Media</title>
        <meta name="description" content="Sparkshot Media: Luxury " />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_FAVICON}icons8-camera-snap.gif`}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Sacramento&display=swap"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <h1 className={styles.name}>
            <em>Sparkshot Media</em>
          </h1>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default About;
