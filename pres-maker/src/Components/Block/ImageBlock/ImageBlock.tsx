import { BlockType } from '../Block'

type ImageBlockType = BlockType & {
  src: string
  opacity?: number
}

export const ImageBlock = ({ src, opacity = 1 }: ImageBlockType) => {
  return <img src={src} style={{ opacity: opacity }} />
}

export type { ImageBlockType }
