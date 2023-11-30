import React, { useEffect, useState } from 'react'
import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
import { Slide } from '../Slide/Slide'
import topPanelStyles from '../Top-panel.module.css'
import icon from '../../images/editor/insertImageIcon.svg'

const InsertImageButton = () => {
  return (
    <button className={topPanelStyles.insertImageButton}>
      <img src={icon} alt={''} />
    </button>
  )
}
export default InsertImageButton
