import React from 'react'
import { BlockType } from '../Block'
import styles from './TextBlock.module.css'
import useDraggable from '../../../utils/useDragAndDrop' // Import css modules stylesheet as styles

type TextBlockType = BlockType & {
  type: string
  value: string
  fillColor?: string
  textColor?: string
  textFont?: string
  textSize?: number
  textBoldness?: boolean
  textUnderlines?: boolean
  textItalic?: boolean
  textHighlight?: string
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>
}
export const TextBlock = ({
  type,
  value,
  fillColor = 'white',
  textColor = 'black',
  textFont = 'Arial',
  textSize,
  textBoldness = false,
  textUnderlines = false,
  textItalic = false,
  textHighlight = '',
  sizeX = 5,
  sizeY = 5,
  coordinatesX,
  coordinatesY,
  scalePercent,
}: TextBlockType) => {
  const { position, onMouseDown, onMouseMove, onMouseUp } = useDraggable()
  return (
    <div onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
      <div
        className={styles.textBlockContainer}
        style={{
          backgroundColor: fillColor,
          width: `${sizeX * scalePercent}%`,
          height: `${sizeY * scalePercent}%`,
          position: 'absolute',
          left: coordinatesX ? `${position.x}px` : 'auto',
          top: coordinatesY ? `${position.y}px` : 'auto',
        }}
        onMouseDown={onMouseDown}
      >
        <div
          className={styles.textBlock}
          style={{
            color: textColor,
            fontFamily: textFont,
            fontSize: textSize ? `${textSize}px` : 'inherit',
            fontWeight: textBoldness ? 'bold' : 'normal',
            textDecoration: textUnderlines ? 'underline' : 'none',
            fontStyle: textItalic ? 'italic' : 'normal',
            backgroundColor: textHighlight,
          }}
        >
          {value}
        </div>
      </div>
    </div>
  )
}

export type { TextBlockType }
