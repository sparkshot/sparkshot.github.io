import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
