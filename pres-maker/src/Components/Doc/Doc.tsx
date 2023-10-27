import React from 'react'

type DocType = {
  name: string
  slides: JSX.Element[]
}

export const Doc = ({ slides }: DocType) => {
  return (
    <div>{slides && slides.map((Component, index) => <React.Fragment key={index}>{Component}</React.Fragment>)}</div>
  )
}

export type { DocType }
