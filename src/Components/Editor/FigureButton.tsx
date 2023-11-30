import React, { useEffect, useState } from 'react'
import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
import { Slide } from '../Slide/Slide'
import topPanelStyles from '../Top-panel.module.css'
import icon from '../../images/editor/figureIcon.svg'

const FigureButton = () => {
  return (
    <button className={topPanelStyles.figureButton}>
      <img src={icon} alt={''} />
    </button>
  )
}
export default FigureButton
