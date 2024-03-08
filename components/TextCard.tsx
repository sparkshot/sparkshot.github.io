import styles from "@styles/components/TextCard.module.scss";
import TextResp from "@components/TextResp";
import Link from "next/link";

interface TextCardProps {
  topText: string | undefined;
  bottomText?: string;
  bottomTextIcon?: any;
  bottomTextLink?: string | undefined;
  style?: any;
}

const TextCard: React.FC<TextCardProps> = (props: TextCardProps) => {
  return (
    <div style={props.style} className={styles.textCard}>
      <TextResp fontSizes={[1, 1.1, 1.2, 1.3, 1.4, 1.5, 2]}>
        {props.topText}
      </TextResp>
      <br></br>
      <br></br>
      {props.bottomTextLink ? (
        <Link href={props.bottomTextLink} className={styles.bottomText}>
          <TextResp fontSizes={[1, 1, 1, 1.1, 1.2, 1.2, 1.7]}>
            {props.bottomText}
          </TextResp>
          <span className={styles.icon}>{props.bottomTextIcon}</span>
        </Link>
      ) : (
        <div className={styles.bottomText}>{props.bottomText}</div>
      )}
    </div>
  );
};

export default TextCard;
