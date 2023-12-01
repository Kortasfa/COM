import React from 'react'
import { Slide, Block } from './PresentationMakerStructure'
import { SlideComponent } from '../Components/Slide/Slide'
import { TextBlock } from '../Components/Block/TextBlock/TextBlock'
import { GraphicObject } from '../Components/Block/GraphicObject/GraphicObject'
import { ImageBlock } from '../Components/Block/ImageBlock/ImageBlock'
import { doc } from './half'

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
    <SlideComponent
      isSelected={false}
      id={slide.ID}
      background={slide.background}
      objects={slide.objects.map(createBlockComponent)}
    />
  )
}

const SlidesData = doc.slides.map(createSlideComponent)

export { SlidesData }
