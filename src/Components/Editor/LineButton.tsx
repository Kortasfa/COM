import React, { useEffect, useState } from 'react'
import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
import { SlideT } from '../Slide/SlideT'
import topPanelStyles from '../Top-panel.module.css'

const LineButton = () => {
  return (
    <div className={topPanelStyles.lineButton}>
      <svg width="21" height="21" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.0333323 1.96672C-0.500001 2.90005 9.1 13.4334 23.2333 27.5667C42.5667 46.9001 47.7667 51.4334 49.1 50.1001C50.4333 48.7667 45.9 43.5667 26.8333 24.5001C13.6333 11.3001 2.43333 0.50005 1.9 0.50005C1.36667 0.50005 0.566666 1.16672 0.0333323 1.96672Z"
          fill="black"
        />
      </svg>
    </div>
  )
}
export default LineButton
