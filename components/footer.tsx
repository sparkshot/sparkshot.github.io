import styles from "../styles/components/Footer.module.scss";

const Footer: React.FC<{}> = (props) => {
  return (
    <div className={styles.footer}>
      <p>© 2023 All Rights Reserved -- Spark Shot Media</p>
    </div>
  );
};
export default Footer;
