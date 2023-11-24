import {
  type GraphicObject,
  type ImageBlock,
  type TextBlock,
  type Block,
  type Slide,
  type Doc,
} from './PresentationMakerStructure'

const graphicObject: GraphicObject = {
  type: 'figure',
  fillColor: '#00FF00',
  figureType: 'rectangle',
}

const imageBlock: ImageBlock = {
  type: 'image',
  src: 'https://alex-bulychev.ru/wp-content/uploads/2013/08/base64.png',
  opacity: 0.8,
}

const textBlock1: TextBlock = {
  type: 'text',
  textColor: 'black',
  value: 'Hells, World!',
  textSize: 12,
}

const textBlock2: TextBlock = {
  type: 'text',
  textColor: 'black',
  value: 'Hello, World!',
  textSize: 12,

}

const block1: Block = {
  ID: 1,
  blockContent: textBlock1,
  borderSize: 2,
  borderColor: '#FF0000',
  coordinatesX: 10,
  coordinatesY: 20,
  sizeX: 10,
  sizeY: 10,
}

const block2: Block = {
  ID: 2,
  blockContent: imageBlock,
  borderSize: 1,
  borderColor: '#00FFFF',
  coordinatesX: 50,
  coordinatesY: 30,
  sizeX: 40,
  sizeY: 40,
}

const block3: Block = {
  ID: 3,
  blockContent: textBlock2,
  borderSize: 3,
  borderColor: '#00FF00',
  coordinatesX: 30,
  coordinatesY: 40,
  sizeX: 150,
  sizeY: 60,
}

const slide1: Slide = {
  ID: 1,
  objects: [block1],
  background: 'white',
}

const slide2: Slide = {
  ID: 2,
  objects: [block2, block3],
  background: 'black',
}

const slide3: Slide = {
  ID: 3,
  objects: [block1, block2, block3],
  background: 'purple',
}

const doc: Doc = {
  slides: [slide1, slide2, slide3],
  name: 'Document Name',
}

export { graphicObject, imageBlock, slide1, slide2, slide3, textBlock1, textBlock2, block1, block2, block3, doc }
