interface PictureBase64 {
  PictureBase64: string;
}

interface PictureUrl {
  PictureUrl: string;
}

interface GraphicObject {
  fillColor: string;
  graphicObjectType: "rectangle" | "triangle" | "circle";
}

interface ImageBlock {
  type: "image";
  src: PictureBase64 | PictureUrl;
  opacity: number;
}

interface TextBlock {
  type: "text";
  value: string;
  fillColor: string;
  textColor: string;
  textFont: string;
  textSize: number;
  textBoldness: boolean;
  textUnderlines: boolean;
  textItalic: boolean;
  textHighlight: string;
}

interface Block {
  ID: number;
  blockContent: TextBlock | ImageBlock | GraphicObject;
  borderSize: number;
  borderColor: string;
  coordinatesX: number;
  coordinatesY: number;
  sizeX: number;
  sizeY: number;
}

interface BackgroundColor {
  BackgroundColor: string;
}

interface Slide {
  ID: number;
  background: PictureBase64 | PictureUrl | BackgroundColor;
  objects: Block[];
}

interface Doc {
  slides: Slide[];
  name: string;
}

// type Action = {
//     ID: number;
//     selectId: Array<Selection>;
//     actionType: {
//         move: string;
//         resize: string;
//         delete: string;
//         add: string;
//     }
//     startPoint: string; // undo
//     endPoint: string; // redo
// }

interface SelectionSlide {
  selectSlide: number;
  selectObject: number[];
}

interface Editor {
  // history: Array<Action> //empty
  selection: SelectionSlide[];
  doc: Doc;
}

export type {
  PictureBase64,
  PictureUrl,
  GraphicObject,
  ImageBlock,
  TextBlock,
  Block,
  BackgroundColor,
  Slide,
  Doc,
  SelectionSlide,
  Editor,
};
