import React, { useEffect, useState } from 'react'
import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
import { Slide } from '../Slide/Slide'
import topPanelStyles from '../Top-panel.module.css'

const ScaleButton = () => {
  return (
    <div className={topPanelStyles.scaleButton}>
      <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 9C0 13.9609 4.03906 18 9 18C11.1172 18 13.0469 17.2344 14.5859 16L24.5391 25.9531L25.9609 24.5469L16 14.5859C17.2344 13.0469 18 11.1172 18 8.99998C18 4.03904 13.9609 -1.52588e-05 9 -1.52588e-05C4.03906 -1.52588e-05 0 4.03906 0 9ZM2 9C2 5.125 5.125 2 9 2C12.875 2 16 5.125 16 9C16 12.875 12.875 16 9 16C5.125 16 2 12.875 2 9Z"
          fill="black"
        />
        <path
          d="M8.43478 4.22199C8.26087 4.39278 8.13043 5.37485 8.13043 6.35692V8.19297L6.08696 8.32107C4.56522 8.40646 4 8.61996 4 9.08964C4 9.55933 4.56522 9.77282 6.04348 9.85822L8.08696 9.98632L8.21739 11.9932C8.30435 13.4449 8.52174 14 9 14C9.47826 14 9.69565 13.4449 9.78261 11.9932L9.91304 9.98632L11.9565 9.85822C13.4348 9.77282 14 9.55933 14 9.08964C14 8.61996 13.4348 8.40646 11.9565 8.32107L9.91304 8.19297L9.78261 6.22883C9.65217 4.35008 9.13043 3.58151 8.43478 4.22199Z"
          fill="black"
        />
      </svg>
    </div>
  )
}
export default ScaleButton