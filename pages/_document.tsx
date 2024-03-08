import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/navbar";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Sparkshot Media: Luxury Real Estate Photography"
        />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_FAVICON}icons8-camera-snap.gif`}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Titan+One&family=Sacramento&family=Alata&family=Archivo+Black&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
