import {
  type PictureBase64,
  type PictureUrl,
  type GraphicObject,
  type ImageBlock,
  type TextBlock,
  type Block,
  type BackgroundColor,
  type Slide,
  type Doc,
} from "./PresentationMakerStructure";

const pictureBase64: PictureBase64 = {
  PictureBase64:
    "https://alex-bulychev.ru/wp-content/uploads/2013/08/base64.png",
};

const pictureUrl: PictureUrl = {
  PictureUrl: "https://alex-bulychev.ru/wp-content/uploads/2013/08/base64.png",
};

const graphicObject: GraphicObject = {
  fillColor: "#00FF00",
  figureType: "rectangle",
};

const imageBlock: ImageBlock = {
  type: "image",
  src: pictureBase64,
  opacity: 0.8,
};

const textBlock1: TextBlock = {
  type: "text",
  textColor: "black",
  value: "Hello, World!",
  textSize: 12,
};

const textBlock2: TextBlock = {
  type: "text",
  textColor: "black",
  value: "Hello, World!",
  textSize: 12,
};

const block1: Block = {
  ID: 1,
  blockContent: textBlock1,
  borderSize: 2,
  borderColor: "#FF0000",
  coordinatesX: 10,
  coordinatesY: 20,
  sizeX: 100,
  sizeY: 50,
};

const block2: Block = {
  ID: 2,
  blockContent: imageBlock,
  borderSize: 1,
  borderColor: "#00FFFF",
  coordinatesX: 50,
  coordinatesY: 30,
  sizeX: 120,
  sizeY: 80,
};

const block3: Block = {
  ID: 3,
  blockContent: textBlock2,
  borderSize: 3,
  borderColor: "#00FF00",
  coordinatesX: 30,
  coordinatesY: 40,
  sizeX: 150,
  sizeY: 60,
};

const backgroundColor1: BackgroundColor = {
  BackgroundColor: "#CCCCCC",
};

const backgroundColor2: BackgroundColor = {
  BackgroundColor: "#FFFFFFF",
};

const slide1: Slide = {
  ID: 1,
  objects: [block1],
  background: backgroundColor1,
};

const slide2: Slide = {
  ID: 2,
  objects: [block2, block3],
  background: backgroundColor2,
};

const slide3: Slide = {
  ID: 3,
  objects: [block1, block2, block3],
  background: backgroundColor2,
};

const doc: Doc = {
  slides: [slide1, slide2, slide3],
  name: "Document Name",
};

export {
  pictureBase64,
  pictureUrl,
  graphicObject,
  imageBlock,
  slide1,
  slide2,
  slide3,
  textBlock1,
  textBlock2,
  block1,
  block2,
  block3,
  doc,
};
