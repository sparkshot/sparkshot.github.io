import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main id="root">{children}</main>
      <Footer />
    </>
  );
}
