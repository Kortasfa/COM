import { BlockType } from '../Block'
import React from 'react'
import styles from './ImageBlock.module.css'

type ImageBlockType = BlockType & {
  src: string
  opacity?: number
}

export const ImageBlock = ({ src, opacity = 1, sizeX, sizeY, coordinatesX, coordinatesY }: ImageBlockType) => {
  return (
    <img
      alt="some"
      src={src}
      className={styles.imageBlock}
      style={{
        opacity: opacity,
        width: sizeX ? `${sizeX}%` : 'auto',
        height: sizeY ? `${sizeY}%` : 'auto',
        position: 'absolute',
        left: coordinatesX ? `${coordinatesX}%` : 'auto',
        top: coordinatesY ? `${coordinatesY}%` : 'auto',
      }}
    />
  )
}

export type { ImageBlockType }
