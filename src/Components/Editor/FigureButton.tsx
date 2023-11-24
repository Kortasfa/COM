import React, { useEffect, useState } from 'react'
import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
import { SlideT } from '../Slide/SlideT'
import topPanelStyles from '../Top-panel.module.css'

const FigureButton = () => {
  return (
    <div className={topPanelStyles.figureButton}>
      <svg width="21" height="21" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.5667 2.96667C4.83335 5.9 0.166687 13.7667 0.166687 20.1667C0.166687 27.2333 4.96669 34.5667 11.5 37.7667C17.3667 40.7 17.5 40.8333 17.5 47.1V53.5H35.5H53.5V35.5V17.5H47.1C40.8334 17.5 40.7 17.3667 37.7667 11.5C32.8334 1.23334 20.9667 -2.5 10.5667 2.96667ZM26.0334 6.03334C30.5667 7.9 34.8334 12.7 34.8334 15.7667C34.8334 16.8333 32.0334 17.5 26.5667 17.7667L18.1667 18.1667L17.7667 26.4333C17.5 32.3 16.8334 34.8333 15.6334 34.8333C12.1667 34.8333 6.83335 29.3667 5.36669 24.1667C3.36669 17.3667 6.83335 9.9 13.5 6.56667C19.1 3.63334 20.3 3.63334 26.0334 6.03334ZM34.8334 24.9667C34.8334 26.0333 33.1 28.8333 30.9667 30.9667C25.1 36.7 22.8334 36.1667 22.8334 28.8333V22.8333H28.8334C33.3667 22.8333 34.8334 23.3667 34.8334 24.9667ZM49.2334 35.7667L48.8334 48.8333L35.9 49.2333L22.8334 49.6333V45.1C22.8334 41.2333 23.5 40.4333 28.8334 37.7667C33.3667 35.5 35.5 33.3667 37.7667 28.8333C40.4334 23.5 41.2334 22.8333 45.1 22.8333H49.6334L49.2334 35.7667Z"
          fill="black"
        />
      </svg>
    </div>
  )
}
export default FigureButton
