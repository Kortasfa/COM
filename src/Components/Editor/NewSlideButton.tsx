import React from 'react'
import topPanelStyles from '../Top-panel.module.css'
import icon from '../../images/editor/newSlideIcon.svg'
import {useState, useEffect} from 'react'

const NewSlideButton = () => {
  return (
    <button className={topPanelStyles.newSlideButton} >
      <img src={icon} alt={''} />
    </button>
  )
}

export default NewSlideButton
