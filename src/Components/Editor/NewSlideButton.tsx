import React, { useEffect, useState } from 'react'
import { Slide } from '../Slide/Slide'
import topPanelStyles from '../Top-panel.module.css'
import icon from '../../images/editor/newSlideIcon.svg'
import { TextBlock } from '../Block/TextBlock/TextBlock'

// type addSlideButtonType = {
//   id: number
//   background?: string
//   objects?: JSX.Element[]
// }

// export const Slide = ({ id, background, objects }: SlideType) => {
//   console.log(id)
//   return (
//     <div style={{ background }} className={styles.slideContainer}>
//       {objects && objects.map((Component, index) => <React.Fragment key={index}>{Component}</React.Fragment>)}
//     </div>
//   )
// }

const NewSlideButton = () => {
  const [click, setClick] = useState(0)
  useEffect(() => {
    <Slide id={3} background={'#FFFFFF'} />
  })
  return (
    <button className={topPanelStyles.newSlideButton} onClick={() => setClick(click)}>
      <img src={icon} alt={''} />
    </button>
  )
}

export default NewSlideButton

//   const [click, setCLick] = useState(0)
//   useEffect(() => {})
