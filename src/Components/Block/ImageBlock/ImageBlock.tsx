import { BlockType } from '../Block'
import React from 'react'
import styles from './ImageBlock.module.css'
import useDraggable from '../../../utils/useDragAndDrop'

type ImageBlockType = BlockType & {
  type: string
  src: string
  opacity?: number
}

export const ImageBlock = ({ src, opacity = 1, sizeX, sizeY, coordinatesX, coordinatesY }: ImageBlockType) => {
  const { position, onMouseDown, onMouseMove, onMouseUp } = useDraggable()
  return (
    <div onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
      <img
        alt="some"
        src={src}
        className={styles.imageBlock}
        style={{
          opacity: opacity,
          width: sizeX ? `${sizeX}%` : 'auto',
          height: sizeY ? `${sizeY}%` : 'auto',
          position: 'absolute',
          left: coordinatesX ? `${position.x}px` : 'auto',
          top: coordinatesY ? `${position.y}px` : 'auto',
        }}
        onMouseDown={onMouseDown}
      />
    </div>
  )
}

export type { ImageBlockType }
