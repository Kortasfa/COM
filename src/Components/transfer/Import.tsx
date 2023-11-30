import { SlideT } from '../Slide/SlideT'
import { TextBlock } from '../Block/TextBlock/TextBlock'
import { GraphicObject } from '../Block/GraphicObject/GraphicObject'
import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
import React, { useRef, useState } from 'react'
import { exportSlidesToJson } from './Export'
import workspaceStyles from '../Workspace.module.css'

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
export type SlideDataType = JSX.Element[] | null
interface SlideImportExportProps {
  slidesData: SlideDataType
  setSlidesData: React.Dispatch<React.SetStateAction<SlideDataType>>
}

const SlideImportExport = ({ slidesData, setSlidesData }: SlideImportExportProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleExportClick = () => {
    if (slidesData) {
      exportSlidesToJson(slidesData)
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileReader = new FileReader()
      fileReader.readAsText(event.target.files[0], 'UTF-8')
      fileReader.onload = (e) => {
        const result = (e.target as FileReader).result
        if (typeof result === 'string') {
          const newData = JSON.parse(result)
          const transformedSlides = transformData(newData)
          setSlidesData(transformedSlides)
        }
      }
    }
  }
  const transformData = (jsonData: JSX.Element[]) => {
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
              />
            )
          default:
            return null
        }
      })

      return <SlideT key={slide.props.id} id={slide.props.id} background={slide.props.background} objects={objects} />
    })
  }
  return (
    <div className={workspaceStyles.sidePanel}>
      <input type="file" ref={fileInputRef} onChange={handleFileSelection} className={workspaceStyles.input} />
      <button onClick={handleExportClick}>Export</button>
      <button onClick={handleButtonClick}>Import</button>
    </div>
  )
}

export default SlideImportExport
