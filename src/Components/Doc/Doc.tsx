import React from 'react'

export type DocType = {
  name: string
  slides: JSX.Element[]
}

export const Doc = ({ slides }: DocType) => {
  return (
    <div>
      {slides &&
        slides.map((Component, index) => (
          <div style={{ marginBottom: '10px', width: '100%', height: '10%' }} key={index}>
            <React.Fragment>{Component}</React.Fragment>
          </div>
        ))}
    </div>
  )
}
