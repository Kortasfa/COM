import React, { useEffect, useState } from 'react'
import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
import { Slide } from '../Slide/Slide'
import topPanelStyles from '../Top-panel.module.css'
import icon from '../../images/editor/newSlideMaketIcon.svg'

const NewSlideMaketButton = () => {
  return (
    <button className={topPanelStyles.newSlideMaketButton}>
      <img src={icon} alt={''} />
    </button>
  )
}
export default NewSlideMaketButton
