import { BlockType } from '../Block'
import React from 'react'
import styles from './ImageBlock.module.css'
import useDraggable from '../../../utils/useDragAndDrop'

type ImageBlockType = BlockType & {
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
          width: sizeX ? `${sizeX}px` : 'auto',
          height: sizeY ? `${sizeY}%` : 'auto',
          position: 'absolute',
          left: coordinatesX ? `${position.x}%` : 'auto',
          top: coordinatesY ? `${position.y}%` : 'auto',
        }}
        onMouseDown={onMouseDown}
      />
    </div>
  )
}

export type { ImageBlockType }
