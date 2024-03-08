import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import TextCard from "@components/text-card";
import ImageCard from "@components/image-card";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sparkshot Media</title>
      </Head>

      <div className={styles.section0}>
        <h1 className={styles.headline + " animate__animated animate__fadeIn"}>
          CAPTURING
        </h1>
        <h1 className={styles.slogan + " animate__animated animate__fadeIn"}>
          MOMENTS THAT CAPTIVATE YOUR HEART
        </h1>
        <div className={styles.boxes + " px-2"}>
          <div
            className={
              styles.box1Container + " animate__animated animate__fadeIn"
            }
          >
            <TextCard
              topText={
                "Shawn Park is a lifestyle, portrait and interior design photographer born and raised in New York City."
              }
              bottomText={"Learn About Me"}
              bottomTextIcon={<BsFillArrowUpRightCircleFill />}
              bottomTextLink="https://www.instagram.com/sparkshott/"
            />
          </div>
          <ImageCard imageSrc="/pic5.jpeg"></ImageCard>
        </div>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
};

export default Home;
