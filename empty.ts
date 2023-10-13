import { type Doc, type Editor } from "./PresentationMakerStructure";

const emptyDoc: Doc = {
  slides: [],
  name: "Empty Document",
};

const emptyEditor: Editor = {
  selection: [],
  doc: emptyDoc,
};

export { emptyDoc, emptyEditor };
