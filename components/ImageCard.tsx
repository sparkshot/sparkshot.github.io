import styles from "../styles/components/ImageCard.module.scss";
import Image from "next/image";
import { useQuery } from "@utils/hooks/useQuery";
import TextResp from "@components/TextResp";

interface ImageCardProps {
  imageSrc: string | undefined;
  titleText?: string | undefined;
  titleTextOnRight?: boolean | undefined;
  linkText?: string | undefined;
}

const ImageCard: React.FC<ImageCardProps> = (props: ImageCardProps) => {
  const isSm = useQuery("(min-width: 576px)");

  const imageCardStyles = {
    backgroundImage: `url(${props.imageSrc})`,
    backgroundSize: "cover",
    objectFit: "fill",
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    borderRadius: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: isSm ? "0 1rem" : "0 3rem",
  };
  if (props.titleTextOnRight) {
    return (
      <div style={imageCardStyles}>
        {/* <div className={styles.container}>
         <Image
           src="/pic1.jpeg"
           alt="this is alt text"
           layout="intrinsic"
           objectFit="cover"
           quality={100}
           width={100}
           height={100}
           className={styles.imageCard}
       /> */}
        {props.linkText && (
          <TextResp
            className={styles.text}
            fontSizes={[0.75, 1.25, 2.15, 3.75, 4.25, 4.5, 5]}
          >
            {props.linkText}
          </TextResp>
        )}
        {props.titleText && (
          <TextResp
            className={styles.text}
            fontSizes={[0.75, 1.25, 2.15, 3.75, 4.25, 4.5, 5]}
          >
            {props.titleText}
          </TextResp>
        )}
      </div>
    );
  } else {
    return (
      <div style={imageCardStyles}>
        {props.titleText && (
          <TextResp
            className={styles.text}
            fontSizes={[0.75, 1.25, 2.15, 3.75, 4.25, 4.5, 5]}
          >
            {props.titleText}
          </TextResp>
        )}
        {props.linkText && (
          <TextResp
            className={styles.text}
            fontSizes={[0.75, 1.25, 2.15, 3.75, 4.25, 4.5, 5]}
          >
            {props.linkText}
          </TextResp>
        )}
      </div>
    );
  }
};

export default ImageCard;
