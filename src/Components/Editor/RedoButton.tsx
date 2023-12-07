import React from 'react'
import topPanelStyles from '../Top-panel.module.css'
import icon from '../../images/editor/redoIcon.svg'

const RedoButton = () => {
  return <button className={topPanelStyles.redoButton}>
    <img src={icon} alt={''} />
  </button>
}
export default RedoButton
