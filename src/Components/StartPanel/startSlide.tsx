import { doc } from './playerStart'
import { Block, Slide } from '../../testData/PresentationMakerStructure'
import { SlideComponent } from '../Slide/Slide'
import React from 'react'
import { TextBlock } from '../Block/TextBlock/TextBlock'
import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
import { GraphicObject } from '../Block/GraphicObject/GraphicObject'
const createBlockComponent = (block: Block) => {
  switch (block.blockContent.type) {
    case 'text':
      return (
        <TextBlock
          type={'TextBlock'}
          id={block.ID}
          key={block.ID}
          coordinatesX={block.coordinatesX}
          coordinatesY={block.coordinatesY}
          textSize={block.blockContent.textSize}
          value={block.blockContent.value}
        />
      )
    case 'image':
      return (
        <ImageBlock
          id={block.ID}
          key={block.ID}
          coordinatesX={block.coordinatesX}
          coordinatesY={block.coordinatesY}
          type={block.blockContent.type}
          sizeX={block.sizeX}
          sizeY={block.sizeY}
          src={block.blockContent.src}
          opacity={block.blockContent.opacity}
        />
      )
    case 'figure':
      return (
        <GraphicObject
          id={block.ID}
          key={block.ID}
          coordinatesX={block.coordinatesX}
          coordinatesY={block.coordinatesY}
          graphicObjectType={block.blockContent.figureType}
          type={block.blockContent.type}
        />
      )
    default:
      return null
  }
}
const createSlideComponent = (slide: Slide) => {
  return (
    <SlideComponent id={slide.ID} background={slide.background} objects={slide.objects.map(createBlockComponent)} />
  )
}

const startSlideData = doc.slides.map(createSlideComponent)

export { startSlideData }
