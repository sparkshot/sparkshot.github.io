import styles from "@styles/components/TextResp.module.scss";
import { useQuery } from "@utils/hooks/useQuery";

interface TextRespProps extends React.PropsWithChildren {
  children: React.ReactElement | string | undefined;
  className?: string | undefined;
  fontSizes: [number, number, number, number, number, number, number];
  htmlElementType?: "h1" | "h2" | "h3" | "p" | "div" | undefined;
}

const TextResp: React.FC<TextRespProps> = (props: TextRespProps) => {
  let chosenFontSize = 0;

  const isXs = useQuery("(min-width: 320px)");
  const isSm = useQuery("(min-width: 576px)");
  const isMd = useQuery("(min-width: 768px)");
  const isLg = useQuery("(min-width: 992px)");
  const isXl = useQuery("(min-width: 1200px)");
  const isXxl = useQuery("(min-width: 1440px)");

  if (isXs) chosenFontSize = props.fontSizes[0];
  else if (isSm) chosenFontSize = props.fontSizes[1];
  else if (isMd) chosenFontSize = props.fontSizes[2];
  else if (isLg) chosenFontSize = props.fontSizes[3];
  else if (isXl) chosenFontSize = props.fontSizes[4];
  else if (isXxl) chosenFontSize = props.fontSizes[5];
  else chosenFontSize = props.fontSizes[6];

  const dynamicStyles = {
    fontSize: chosenFontSize + "rem",
  };

  switch (props.htmlElementType) {
    case "h1":
      return (
        <h1 style={dynamicStyles} className={props.className}>
          {props.children}
        </h1>
      );
    case "h2":
      return (
        <h2 style={dynamicStyles} className={props.className}>
          {props.children}
        </h2>
      );
    case "h3":
      return (
        <h3 style={dynamicStyles} className={props.className}>
          {props.children}
        </h3>
      );
    case "p":
      return (
        <p style={dynamicStyles} className={props.className}>
          {props.children}
        </p>
      );
    case "div":
    default:
      return (
        <div style={dynamicStyles} className={props.className}>
          {props.children}
        </div>
      );
  }
};

export default TextResp;
