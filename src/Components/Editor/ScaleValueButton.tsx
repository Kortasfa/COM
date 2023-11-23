import React, { useEffect, useState } from 'react'
import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
import { Slide } from '../Slide/Slide'
import topPanelStyles from '../Top-panel.module.css'

const ScaleValueButton = () => {
  return (
    <div className={topPanelStyles.scaleValueButton}>
      <span>По шир</span>
    </div>
  )
}
export default ScaleValueButton
