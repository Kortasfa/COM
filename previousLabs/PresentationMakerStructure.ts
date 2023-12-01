type PictureBase64 = {
  PictureBase64: string;
};

type PictureUrl = {
  PictureUrl: string;
};

type GraphicObject = {
  fillColor: string;
  figureType: "rectangle" | "triangle" | "circle";
};

type ImageBlock = {
  type: "image";
  src: PictureBase64 | PictureUrl;
  opacity?: number;
};

type TextBlock = {
  type: "text";
  value: string;
  fillColor?: string;
  textColor: string;
  textFont?: string;
  textSize?: number;
  textBoldness?: boolean;
  textUnderlines?: boolean;
  textItalic?: boolean;
  textHighlight?: string;
};

type Block = {
  ID: number;
  blockContent: TextBlock | ImageBlock | GraphicObject;
  borderSize: number;
  borderColor: string;
  coordinatesX: number;
  coordinatesY: number;
  sizeX: number;
  sizeY: number;
};

type BackgroundColor = {
  BackgroundColor: string;
};

type Slide = {
  ID: number;
  background: PictureBase64 | PictureUrl | BackgroundColor;
  objects: Array<Block>;
};

type Doc = {
  slides: Slide[];
  name: string;
};

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
};
