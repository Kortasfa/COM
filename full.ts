import "./PresentationMakerStructure"
import {PictureBase64} from "./PresentationMakerStructure";
import {PictureUrl} from "./PresentationMakerStructure";
import {GraphicObject} from "./PresentationMakerStructure";
import {ImageBlock} from "./PresentationMakerStructure";
import {TextBlock} from "./PresentationMakerStructure";
import {Block} from "./PresentationMakerStructure";
import {BackgroundColor} from "./PresentationMakerStructure";
import {Slide} from "./PresentationMakerStructure";
import {Doc} from "./PresentationMakerStructure";
import {SelectionSlide} from "./PresentationMakerStructure";
import {Editor} from "./PresentationMakerStructure";

const pictureBase64_1: PictureBase64 = {
  PictureBase64: "base64encodedstring1"
};

const pictureBase64_2: PictureBase64 = {
  PictureBase64: "base64encodedstring2"
};

const pictureUrl: PictureUrl = {
  PictureUrl: "https://example.com/image.jpg"
};

const graphicObject: GraphicObject = {
  fillColor: "#00FF00",
  figureType: "rectangle"
};

const imageBlock_1: ImageBlock = {
  type: "image",
  src: pictureBase64_1,
  opacity: 0.8
};

const imageBlock_2: ImageBlock = {
  type: "image",
  src: pictureBase64_2,
  opacity: 0.9
};

const textBlock: TextBlock = {
  type: "text",
  value: "Hello, World!",
  fillColor: "#0000FF",
  textColor: "#FFFFFF",
  textFont: "Arial",
  textSize: 14,
  textBoldness: true,
  textUnderlines: false,
  textItalic: false,
  textHighlight: "#FFFF00"
};

const block_1: Block = {
  ID: 1,
  blockContent: textBlock,
  borderSize: 2,
  borderColor: "#FF0000",
  coordinatesX: 10,
  coordinatesY: 20,
  sizeX: 100,
  sizeY: 50
};

const block_2: Block = {
  ID: 2,
  blockContent: graphicObject,
  borderSize: 1,
  borderColor: "#00FFFF",
  coordinatesX: 50,
  coordinatesY: 100,
  sizeX: 80,
  sizeY: 80
};

const backgroundColor_1: BackgroundColor = {
  BackgroundColor: "#CCCCCC"
};

const backgroundColor_2: BackgroundColor = {
  BackgroundColor: "#DDDDDD"
};

const slide_1: Slide = {
  ID: 1,
  background: backgroundColor_1,
  objects: [block_1, imageBlock_1]
};

const slide_2: Slide = {
  ID: 2,
  background: pictureUrl,
  objects: [block_2, imageBlock_2]
};

const doc: Doc = {
  slides: [slide_1, slide_2], //10
  name: "Document Name"
};

const selectionSlide: SelectionSlide = {
  selectSlide: 1,
  selectObject: [1]
};

const editor: Editor = {
  selection: [selectionSlide],
  doc: doc
};

export {
  pictureBase64_1,
  pictureBase64_2,
  pictureUrl,
  graphicObject,
  imageBlock_1,
  imageBlock_2,
  textBlock,
  block_1,
  block_2,
  backgroundColor_1,
  backgroundColor_2,
  slide_1,
  slide_2,
  doc,
  selectionSlide,
  editor
};
