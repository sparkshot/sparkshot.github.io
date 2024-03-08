import type { NextPage } from "next";
import styles from "../styles/Section2.module.scss";
import ImageCard from "@components/image-card";
import TextResp from "@components/textResp";

const Section2: NextPage = () => {
  return (
    <>
      <div id="featured-works" className={styles.container}>
        <TextResp
          className={styles.heading}
          fontSizes={[2, 2.5, 3, 4.2, 5.5, 6.5, 8.5]}
          htmlElementType="h1"
        >
          <b>FEATURED WORKS</b>
        </TextResp>
        <div className={styles.cards}>
          <ImageCard
            imageSrc="/pic1.jpeg"
            titleText="Collaborations"
            linkText="2020"
          ></ImageCard>
          <ImageCard
            imageSrc="/pic2.jpeg"
            titleText="Photography"
            titleTextOnRight={true}
            linkText="2021"
          ></ImageCard>
          <ImageCard
            imageSrc="/pic3.jpeg"
            titleText="Videography"
            linkText="2022"
          ></ImageCard>
        </div>
      </div>
    </>
  );
};

export default Section2;
