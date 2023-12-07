import React, { useEffect, useState } from 'react'
import { TextBlock } from '../Block/TextBlock/TextBlock'
import topPanelStyles from '../Top-panel.module.css'
import icon from '../../images/editor/textFieldIcon.svg'

const TextFieldButton = () => {
  return (
    <button className={topPanelStyles.textFieldButton} >
      <img src={icon} alt={''} />
    </button>
  )
}

export default TextFieldButton
