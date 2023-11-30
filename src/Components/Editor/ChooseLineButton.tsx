import React, { useEffect, useState } from 'react'
import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
import { Slide } from '../Slide/Slide'
import topPanelStyles from '../Top-panel.module.css'
import icon from '../../images/editor/chooseLineIcon.svg'

const ChooseLineButton = () => {
  return (
    <button className={topPanelStyles.chooseLineButton}>
      <img src={icon} alt={''} />
    </button>
  )
}
export default ChooseLineButton
