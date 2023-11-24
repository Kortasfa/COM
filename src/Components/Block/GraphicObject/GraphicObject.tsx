import { BlockType } from "../Block";
import React from "react";
import styles from "./GraphicObject.module.css";

type GraphicObjectType = BlockType & {
  type: string;
  fillColor?: string;
  graphicObjectType: "rectangle" | "triangle" | "circle";
};

const GraphicObject = ({
  type,
  id,
  borderSize = 1,
  sizeX = 5,
  sizeY = 5,
  borderColor = "black",
  coordinatesY,
  coordinatesX,
  fillColor = "black",
  graphicObjectType,
}: GraphicObjectType) => {
  const rectangle = (
    <div className={`${styles.rectangleContainer}`}>
      <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg" className={styles.graphic}>
        <rect className={styles.rectangle} fill={fillColor} />
      </svg>
    </div>
  );

  const circle = (
    <div className={`${styles.circleContainer}`}>
      <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" className={styles.graphic}>
        <circle cx="100" cy="75" r="50" className={styles.circle} fill={fillColor} />
      </svg>
    </div>
  );

  const triangle = (
    <div className={`${styles.triangleContainer}`}>
      <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" className={styles.graphic}>
        <polygon points="150,60 0,400 300,400" className={styles.triangle} fill={fillColor} />
      </svg>
    </div>
  );

  let render;
  if (graphicObjectType === "rectangle") {
    render = rectangle;
  } else if (graphicObjectType === "circle") {
    render = circle;
  } else if (graphicObjectType === "triangle") {
    render = triangle;
  } else {
    return null;
  }

  return render;
};

export { GraphicObject };

export type { GraphicObjectType };
