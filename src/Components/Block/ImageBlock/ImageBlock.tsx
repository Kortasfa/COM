import { BlockType } from '../Block'
import React from 'react'
import styles from './ImageBlock.module.css'

type ImageBlockType = BlockType & {
  type: string
  src: string
  opacity?: number
}

export const ImageBlock = ({ type, src, opacity = 1 }: ImageBlockType) => {
  return <img alt="some" src={src} className={styles.imageBlock} style={{ opacity: opacity }} />
}

export type { ImageBlockType }
