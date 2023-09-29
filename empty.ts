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

const emptyDoc: Doc = {
  slides: [],
  name: "Empty Document"
};

const emptyEditor: Editor = {
  selection: [],
  doc: emptyDoc
};

export { emptyDoc, emptyEditor };
