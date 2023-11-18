import React from 'react'
import { BlockType } from '../Block'
import styles from './TextBlock.module.css' // Import css modules stylesheet as styles

type TextBlockType = BlockType & {
  value: string
  fillColor?: string
  textColor?: string
  textFont?: string
  textSize?: number
  textBoldness?: boolean
  textUnderlines?: boolean
  textItalic?: boolean
  textHighlight?: string
}
export const TextBlock = ({
  value,
  fillColor = 'white',
  textColor = 'black',
  textFont = 'Arial',
  textSize,
  textBoldness = false,
  textUnderlines = false,
  textItalic = false,
  textHighlight = '',
  sizeX,
  sizeY,
  coordinatesX,
  coordinatesY,
}: TextBlockType) => {
  return (
    <div
      className={styles.textBlockContainer}
      style={{
        backgroundColor: fillColor,
        width: sizeX ? `${sizeX}%` : 'auto',
        height: sizeY ? `${sizeY}%` : 'auto',
        position: 'absolute',
        left: coordinatesX ? `${coordinatesX}%` : 'auto',
        top: coordinatesY ? `${coordinatesY}%` : 'auto',
      }}
    >
      <p
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
      </p>
    </div>
  )
}

export type { TextBlockType }
