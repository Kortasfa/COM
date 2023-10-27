type PictureBase64Type = {
  imgSrc: string
}

export const PictureBase64 = ({ imgSrc }: PictureBase64Type) => {
  return <img src={imgSrc} />
}

export type { PictureBase64Type }
