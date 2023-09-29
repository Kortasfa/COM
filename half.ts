const pictureBase64: PictureBase64 = {
  PictureBase64: "base64encodedstringhere"
};

const pictureUrl: PictureUrl = {
  PictureUrl: "https://example.com/image.jpg"
};

const graphicObject: GraphicObject = {
  fillColor: "#00FF00",
  figureValue: "square"
};

const imageBlock: ImageBlock = {
  type: "image",
  src: pictureBase64,
  opacity: 0.8
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

const block: Block = {
  ID: 1,
  blockContent: textBlock,
  borderSize: 2,
  borderColor: "#FF0000",
  coordinatesX: 10,
  coordinatesY: 20,
  sizeX: 100,
  sizeY: 50
};

const backgroundColor: BackgroundColor = {
  BackgroundColor: "#CCCCCC"
};

const slide: Slide = {
  ID: 1,
  background: backgroundColor,
  objects: [block]
};

const doc: Doc = {
  slides: [slide],
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
  pictureBase64,
  pictureUrl,
  graphicObject,
  imageBlock,
  textBlock,
  block,
  backgroundColor,
  slide,
  doc,
  selectionSlide,
  editor
};
