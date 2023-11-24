import React from "react";
import { BlockType } from "../Block";
import styles from "./TextBlock.module.css"; // Import css modules stylesheet as styles

type TextBlockType = BlockType & {
  type: string;
  value: string;
  fillColor?: string;
  textColor?: string;
  textFont?: string;
  textSize?: number;
  textBoldness?: boolean;
  textUnderlines?: boolean;
  textItalic?: boolean;
  textHighlight?: string;
};
export const TextBlock = ({
  type,
  value,
  fillColor = "white",
  textColor = "black",
  textFont = "Arial",
  textSize,
  textBoldness = false,
  textUnderlines = false,
  textItalic = false,
  textHighlight = "",
}: TextBlockType) => {
  return (
    <div className={styles.textBlockContainer} style={{ backgroundColor: fillColor }}>
      <p
        className={styles.textBlock}
        style={{
          color: textColor,
          fontFamily: textFont,
          fontSize: `${textSize}px`,
          fontWeight: textBoldness ? 500 : 400,
          textDecoration: textUnderlines ? "underline" : "none",
          fontStyle: textItalic ? "italic" : "normal",
          backgroundColor: textHighlight,
        }}
      >
        {value}
      </p>
    </div>
  );
};

export type { TextBlockType };
