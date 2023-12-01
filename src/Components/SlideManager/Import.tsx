import React from 'react'
import { TextBlock } from '../Block/TextBlock/TextBlock'
import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
import { GraphicObject } from '../Block/GraphicObject/GraphicObject'
import { SlideComponent } from '../Slide/Slide'
import { SlideDataType } from './SlideOrganizer'

interface ObjectData {
  key: string
  props: TextBlockProps | ImageBlockProps | GraphicObjectProps
}

interface TextBlockProps {
  type: 'TextBlock'
  id: number
  coordinatesX: number
  coordinatesY: number
  textSize: number
  value: string
}

interface ImageBlockProps {
  type: 'image'
  id: number
  coordinatesX: number
  coordinatesY: number
  src: string
  sizeX: number
  sizeY: number
  opacity: number
}

interface GraphicObjectProps {
  type: 'figure'
  id: number
  coordinatesX: number
  coordinatesY: number
  graphicObjectType: 'rectangle' | 'triangle' | 'circle'
}

export interface SlideProps {
  slidesData: SlideDataType
  setSlidesData: React.Dispatch<React.SetStateAction<SlideDataType>>
}

const transformData = (jsonData: JSX.Element[]) => {
  try {
    return jsonData.map((slide) => {
      const objects = slide.props.objects.map((obj: ObjectData) => {
        switch (obj.props.type) {
          case 'TextBlock':
            return (
              <TextBlock
                key={obj.key}
                id={obj.props.id}
                type={obj.props.type}
                coordinatesX={obj.props.coordinatesX}
                coordinatesY={obj.props.coordinatesY}
                textSize={obj.props.textSize}
                value={obj.props.value}
                scalePercent={10}
              />
            )
          case 'image':
            return (
              <ImageBlock
                key={obj.key}
                id={obj.props.id}
                type={obj.props.type}
                coordinatesX={obj.props.coordinatesX}
                coordinatesY={obj.props.coordinatesY}
                sizeX={obj.props.sizeX}
                sizeY={obj.props.sizeY}
                src={obj.props.src}
                opacity={obj.props.opacity}
                scalePercent={10}
              />
            )
          case 'figure':
            return (
              <GraphicObject
                key={obj.key}
                id={obj.props.id}
                type={obj.props.type}
                coordinatesX={obj.props.coordinatesX}
                coordinatesY={obj.props.coordinatesY}
                graphicObjectType={obj.props.graphicObjectType}
                scalePercent={10}
              />
            )
          default:
            return null
        }
      })

      return (
        <SlideComponent
          key={slide.props.id}
          id={slide.props.id}
          background={slide.props.background}
          objects={objects}
          isSelected={false}
        />
      )
    })
  } catch (error) {
    // console.error('Ошибка при обработке JSON:', error)
    return null
  }
}

export { transformData }
