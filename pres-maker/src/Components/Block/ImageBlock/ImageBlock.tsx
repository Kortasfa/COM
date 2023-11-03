import { BlockType } from '../Block'
import React from 'react'

type ImageBlockType = BlockType & {
  src: string
  opacity?: number
}

export const ImageBlock = ({ src, opacity = 1 }: ImageBlockType) => {
  return <img alt="some" src={src} style={{ opacity: opacity }} />
}

export type { ImageBlockType }
