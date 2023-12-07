import React from 'react'
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
