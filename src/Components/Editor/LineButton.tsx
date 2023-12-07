import React from 'react'
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
