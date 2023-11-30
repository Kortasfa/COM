import React from 'react'

export type DocType = {
  name: string
  slides: JSX.Element[]
  updateData: (data: JSX.Element[]) => void
}

export const Doc = ({ slides, onSelectSlide, updateData }: DocType & { onSelectSlide: (index: number) => void }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {slides.map((Component, index) => (
        <div
          style={{ marginBottom: '15px', width: '100%', height: '110px' }}
          key={index}
          onClick={() => onSelectSlide(index)}
        >
          <React.Fragment>{Component}</React.Fragment>
        </div>
      ))}
    </div>
  )
}
