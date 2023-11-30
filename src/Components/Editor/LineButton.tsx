import React, { useEffect, useState } from 'react'
import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
import { Slide } from '../Slide/Slide'
import topPanelStyles from '../Top-panel.module.css'
import icon from '../../images/editor/lineIcon.svg'

const LineButton = () => {
  return (
    <button className={topPanelStyles.lineButton}>
      <img src={icon} alt={''} />
    </button>
  )
}
export default LineButton
