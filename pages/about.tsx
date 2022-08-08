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
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>HELLO this is about page &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default About;
