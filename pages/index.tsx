import type { NextPage } from "next";
import Hero from "@components/hero";
import Gallery from "@components/gallery";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Gallery />
    </>
  );
};

export default Home;
