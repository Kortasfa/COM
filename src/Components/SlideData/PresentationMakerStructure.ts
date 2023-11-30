type GraphicObject = {
  type: 'figure'
  fillColor: string
  figureType: 'rectangle' | 'triangle' | 'circle'
}

type ImageBlock = {
  type: 'image'
  src: string
  opacity?: number
}

type TextBlock = {
  type: 'text'
  value: string
  fillColor?: string
  textColor: string
  textFont?: string
  textSize?: number
  textBoldness?: boolean
  textUnderlines?: boolean
  textItalic?: boolean
  textHighlight?: string
}

type Block = {
  ID: number
  blockContent: TextBlock | ImageBlock | GraphicObject
  borderSize: number
  borderColor: string
  coordinatesX: number
  coordinatesY: number
  sizeX: number
  sizeY: number
}

// type BackgroundColor = {
//   BackgroundColor: string
// }

type Slide = {
  ID: number
  background: string
  objects: Array<Block>
}

type Doc = {
  slides: Slide[]
  name: string
}

export type { GraphicObject, ImageBlock, TextBlock, Block, Slide, Doc }
