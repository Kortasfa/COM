import React from 'react'

type SlideType = {
  id: number
  background?: string
  objects?: JSX.Element[]
}

export const Slide = ({ id, background, objects }: SlideType) => {
  console.log(id)
  return (
    <div style={{ background }}>
      {objects && objects.map((Component, index) => <React.Fragment key={index}>{Component}</React.Fragment>)}
    </div>
  )
}

export type { SlideType }
