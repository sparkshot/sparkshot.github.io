import type { GetStaticProps, NextPage } from "next";
import Hero from "@components/hero";
import Gallery from "@components/gallery";
import fs from "fs";
import path from "path";

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

console.log("test")
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
    .map((file) => ({
      src: `/${file}`,
      width: 1080,
      height: 1350,
    }));

  return { props: { photos } };
};
