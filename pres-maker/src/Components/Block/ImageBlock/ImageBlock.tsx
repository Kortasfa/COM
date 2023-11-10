import { BlockType } from '../Block'
import React from 'react'
import styles from './ImageBlock.module.css'

type ImageBlockType = BlockType & {
  src: string
  opacity?: number
}

export const ImageBlock = ({ src, opacity = 1 }: ImageBlockType) => {
  return <img alt="some" src={src} className={styles.imageBlock} style={{ opacity: opacity }} />
}

export type { ImageBlockType }
