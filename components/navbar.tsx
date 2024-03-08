import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";
import { useQuery } from "@utils/hooks/useQuery";
import { useState } from "react";

import { capitalizeFirstLetter } from "@utils/strings";
import { scrolltoHash } from "@utils/scroll";

// Type Declarations
interface pageNames extends Array<Array<string>> {}

// Const Data
// const old_pageNames: string[] = ["/gallery","/about","/contact","#section1","#section2","#section3",];
const pageNames = [
  ["/", "HOME"],
  ["#about-me", "ABOUT"],
  ["#featured-works", "FEATURED"],
  ["#projects", "PROJECTS"],
];

// const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//   // first prevent the default behavior
//   e.preventDefault();
//   // get the href and remove everything before the hash (#)
//   const href = e.currentTarget.href;
//   const targetId = href.replace(/.*\#/, "");
//   // get the element by id and use scrollIntoView
//   const elem = document.getElementById(targetId);
//   elem?.scrollIntoView({
//     behavior: "smooth",
//   });
// };

const Navbar: React.FC<{}> = (props) => {
  const navListItems = pageNames.map((name: string[], i: number) => (
    <Link
      key={i}
      href={name[0]}
      onClick={() => {
        setIsOpen(false);
      }}
      className={styles.navbarListItem}
    >
      {name[1]}
    </Link>
  ));

  const [isOpen, setIsOpen] = useState(false);

  const closeAllMenusOnEsc = (e: any) => {
    e = e || window.event;
    console.log(e, e.key === "Escape", e.keyCode === 27);

    if (e.key === "Escape" || e.keyCode === 27) {
      setIsOpen(false);
    }
  };

  const isSm = useQuery("(min-width: 576px)");

  return (
    <>
      <nav id="navbar" className={styles.navbar}>
        {/** Main Logo */}
        <Link href="/" className={styles.navbarLogo}>
          <Image
            priority
            src={"/sparkshot-logo-1.svg"}
            width={70}
            height={50}
            alt="Sparkshot Logo"
          />
        </Link>
        {/** Menu items */}
        {isSm ? (
          <Menu
            right
            isOpen={isOpen}
            customOnKeyDown={closeAllMenusOnEsc}
            width={"100%"}
            onStateChange={(state) => {
              setIsOpen(state.isOpen);
            }}
            itemClassName={styles.navbarListItemSidePane}
          >
            {navListItems}
          </Menu>
        ) : (
          <div className={styles.navbarList}>{navListItems}</div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
