import type { NextPage } from "next";
import styles from "../styles/components/Footer.module.scss";

const Footer: NextPage = (props) => {
  return (
    <div className={styles.footer}>
      <p>footer</p>
    </div>
  );
};
export default Footer;
