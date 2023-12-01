import React, { useState } from 'react'
import { BlockType } from '../Block'
import styles from './TextBlock.module.css'
import useDraggable from '../../../utils/useDragAndDrop'
import useResizable from '../../../utils/useResizable'

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
  value: initialValue,
  fillColor: initialFillColor = 'white',
  textColor: initialTextColor = 'black',
  textFont: initialTextFont = 'Arial',
  textSize: initialTextSize,
  textBoldness: initialTextBoldness = false,
  textUnderlines: initialTextUnderlines = false,
  textItalic: initialTextItalic = false,
  textHighlight: initialTextHighlight = '',
  sizeX = 50,
  sizeY = 50,
  coordinatesX,
  coordinatesY,
  scalePercent = 10,
}: TextBlockType) => {
  const [value, setValue] = useState(initialValue)
  const [textColor, setTextColor] = useState(initialTextColor)
  const [fillColor, setFillColor] = useState(initialFillColor)
  const [textFont, setTextFont] = useState(initialTextFont)
  const [textSize, setTextSize] = useState(initialTextSize)
  const [textBoldness, setTextBoldness] = useState(initialTextBoldness)
  const [textUnderlines, setTextUnderlines] = useState(initialTextUnderlines)
  const [textItalic, setTextItalic] = useState(initialTextItalic)
  const [textHighlight, setTextHighlight] = useState(initialTextHighlight)
  const { position, onMouseDown: onMouseDownDrag, onMouseMove, onMouseUp } = useDraggable()
  const { size, onMouseDownResize } = useResizable(sizeX, sizeY)
  const handleTextChange = (event: any) => {
    setValue(event.target.value)
  }
  const handleMouseDown = (e: any) => {
    if (e.target.getAttribute('data-resizer')) {
      onMouseDownResize(e)
    } else {
      onMouseDownDrag(e)
    }
  }

  return (
    <div onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
      <div
        className={styles.textBlockContainer}
        style={{
          backgroundColor: fillColor,
          width: `${size.width}px`,
          height: `${size.height}px`,
          position: 'absolute',
          left: coordinatesX ? `${position.x}px` : 'auto',
          top: coordinatesY ? `${position.y}px` : 'auto',
        }}
        onMouseDown={handleMouseDown}
      >
        <div
          className={styles.textBlock}
          contentEditable={true}
          onInput={handleTextChange}
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
        <div
          data-resizer
          style={{ width: '10px', height: '10px', position: 'absolute', bottom: 0, right: 0, cursor: 'nwse-resize' }}
        />
      </div>
    </div>
  )
}

export type { TextBlockType }
