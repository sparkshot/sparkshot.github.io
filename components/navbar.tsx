// Components
import React from "react";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import { NextPage } from "next";

// Type Declarations
interface pageNames extends Array<string> {}

// Const Data
const pageNames: string[] = ["gallery", "about", "contact"];

// Helper Functions
const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Navbar: NextPage = (props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.navbarLogo}>Sparkshot Media</a>
        </Link>
        <ul className={styles.navbarList}>
          {pageNames.map((name: string, i: number) => (
            <li key={i} className={styles.navbarListItem}>
              <Link href={`/${name}`}>{capitalizeFirstLetter(name)}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
