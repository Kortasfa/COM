import React from 'react'
import styles from './Slide.module.css'

type SlideType = {
  id: number
  background: string
  objects: React.ReactNode[]
  isSelected: boolean
}

const SlideComponent = ({ id, background, objects }: SlideType) => {
  return (
    <div style={{ background }} className={styles.slideContainer}>
      {objects && objects.map((Component, index) => <React.Fragment key={index}>{Component}</React.Fragment>)}
    </div>
  )
}

export type { SlideType }
export { SlideComponent }
