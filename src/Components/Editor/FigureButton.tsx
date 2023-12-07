import React from 'react'
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
