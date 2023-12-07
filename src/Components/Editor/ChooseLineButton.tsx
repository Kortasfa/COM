import React from 'react'
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
