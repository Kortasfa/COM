import React, { useEffect, useState } from 'react'
import { Slide } from '../Slide/Slide'
import topPanelStyles from '../Top-panel.module.css'

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
  return (
    <div className={topPanelStyles.newSlideButton}>
      <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.1667 5.83333V11.1667H5.83333C2.9 11.1667 0.5 11.7 0.5 12.5C0.5 13.1667 2.9 13.8333 5.83333 13.8333H11.1667V19.1667C11.1667 22.1 11.8333 24.5 12.5 24.5C13.3 24.5 13.8333 22.1 13.8333 19.1667V13.8333H19.1667C22.1 13.8333 24.5 13.1667 24.5 12.5C24.5 11.7 22.1 11.1667 19.1667 11.1667H13.8333V5.83333C13.8333 2.9 13.3 0.499999 12.5 0.499999C11.8333 0.499999 11.1667 2.9 11.1667 5.83333Z"
          fill="black"
        />
      </svg>
    </div>
  )
}

export default NewSlideButton

//   const [click, setCLick] = useState(0)
//   useEffect(() => {})
