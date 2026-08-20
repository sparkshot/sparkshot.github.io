import type { GetStaticProps, NextPage } from "next";
import Hero from "@components/hero";
import Gallery from "@components/gallery";
import fs from "fs";
import path from "path";
import { imageSize } from "image-size";

export interface Photo {
  src: string;
  width: number;
  height: number;
}

interface HomeProps {
  photos: Photo[];
}

const Home: NextPage<HomeProps> = ({ photos }) => {
  return (
    <>
      <Hero />
      <Gallery photos={photos} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const publicDir = path.join(process.cwd(), "public");
  const files = fs.readdirSync(publicDir);

  const photos = files
    .filter((file) => /^portfolio-pic\d+\.jpeg$/.test(file))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)![0]);
      const numB = parseInt(b.match(/\d+/)![0]);
      return numA - numB;
    })
    .map((file) => {
      const filePath = path.join(publicDir, file);
      const buffer = new Uint8Array(fs.readFileSync(filePath));
      const dimensions = imageSize(buffer);
      return {
        src: `/${file}`,
        width: dimensions.width!,
        height: dimensions.height!,
      };
    });

  return { props: { photos } };
};
