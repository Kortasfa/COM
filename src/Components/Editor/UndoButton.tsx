import React, { useEffect, useState } from 'react'
import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
import { Slide } from '../Slide/Slide'
import topPanelStyles from '../Top-panel.module.css'
import icon from '../../images/editor/undoIcon.svg'

const UndoButton = () => {
  return <button className={topPanelStyles.undoButton}>
    <img src={icon} alt={''} />
  </button>
}
export default UndoButton
