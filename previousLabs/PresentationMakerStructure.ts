interface PictureBase64 {
  PictureBase64: string;
}

interface PictureUrl {
  PictureUrl: string;
}

interface Block {
  ID: number;
  borderSize: number;
  borderColor: string;
  coordinatesX: number;
  coordinatesY: number;
  sizeX: number;
  sizeY: number;
}

interface GraphicObject extends Block {
  fillColor: string;
  graphicObjectType: "rectangle" | "triangle" | "circle";
}

interface ImageBlock extends Block {
  type: "image";
  src: PictureBase64 | PictureUrl;
  opacity: number;
}

interface TextBlock extends Block {
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

interface BackgroundColor {
  BackgroundColor: string;
}

interface Slide {
  ID: number;
  background: PictureBase64 | PictureUrl | BackgroundColor;
  objects: TextBlock | GraphicObject | ImageBlock;
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
