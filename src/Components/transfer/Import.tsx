import { SlideT } from "../Slide/Slide";
import { TextBlock } from "../Block/TextBlock/TextBlock";
import { GraphicObject } from "../Block/GraphicObject/GraphicObject";
import { ImageBlock } from "../Block/ImageBlock/ImageBlock";
import React, { useRef, useState } from 'react'
// import { SlidesData } from "../SlideData/Slides";
import { exportSlidesToJson } from './Export';

interface ObjectData {
  key: string;
  props: TextBlockProps | ImageBlockProps | GraphicObjectProps;
}

interface TextBlockProps {
  type: "TextBlock";
  id: number;
  coordinatesX: number;
  coordinatesY: number;
  textSize: number;
  value: string;
}

interface ImageBlockProps {
  type: "image";
  id: number;
  coordinatesX: number;
  coordinatesY: number;
  src: string;
  opacity: number;
}

interface GraphicObjectProps {
  type: "figure";
  id: number;
  coordinatesX: number;
  coordinatesY: number;
  graphicObjectType: "rectangle" | "triangle" | "circle";
}
export type SlideDataType = JSX.Element[] | null;
interface SlideImportExportProps {
  slidesData: SlideDataType;
  setSlidesData: React.Dispatch<React.SetStateAction<SlideDataType>>;
}

const SlideImportExport = ({ slidesData, setSlidesData }: SlideImportExportProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExportClick = () => {
    if (slidesData) {
      exportSlidesToJson(slidesData);
    } else {
      console.log("No slides data to export");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.readAsText(event.target.files[0], "UTF-8");
      fileReader.onload = (e) => {
        const result = (e.target as FileReader).result;
        if (typeof result === "string") {
          const newData = JSON.parse(result);
          // You need to define how to transform the data
          const transformedSlides = transformData(newData);
          setSlidesData(transformedSlides); // Update the state with the new data
        }
      };
    }
  };
  const transformData = (jsonData: JSX.Element[]) => {
    return jsonData.map((slide) => {
      const objects = slide.props.objects.map((obj: ObjectData) => {
        switch (obj.props.type) {
          case "TextBlock":
            return (
              <TextBlock
                key={obj.key}
                id={obj.props.id}
                type={obj.props.type}
                coordinatesX={obj.props.coordinatesX}
                coordinatesY={obj.props.coordinatesY}
                textSize={obj.props.textSize}
                value={obj.props.value}
              />
            );
          case "image":
            return (
              <ImageBlock
                key={obj.key}
                id={obj.props.id}
                type={obj.props.type}
                coordinatesX={obj.props.coordinatesX}
                coordinatesY={obj.props.coordinatesY}
                src={obj.props.src}
                opacity={obj.props.opacity}
              />
            );
          case "figure":
            return (
              <GraphicObject
                key={obj.key}
                id={obj.props.id}
                type={obj.props.type}
                coordinatesX={obj.props.coordinatesX}
                coordinatesY={obj.props.coordinatesY}
                graphicObjectType={obj.props.graphicObjectType}
              />
            );
          default:
            return null;
        }
      });

      return <SlideT key={slide.props.id} id={slide.props.id} background={slide.props.background} objects={objects} />;
    });
  };
  return (
    <>
      <input type="file" ref={fileInputRef} onChange={handleFileSelection} style={{ display: "none" }} />
      <button onClick={handleExportClick}>Export</button>
      <button onClick={handleButtonClick}>Import</button>
    </>
  );
};

export default SlideImportExport;

