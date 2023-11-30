import React from 'react'
import topPanelStyles from '../Top-panel.module.css'

const ChooseLineButton = () => {
  return (
    <div className={topPanelStyles.chooseLineButton}>
      <svg width="11" height="21" viewBox="0 0 31 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.833313 1.23335C0.833313 1.76668 4.16665 5.50001 8.16665 9.50001L15.5 16.7L22.8333 9.50001C26.8333 5.50001 30.1666 1.76668 30.1666 1.23335C30.1666 0.700013 23.6333 0.16668 15.5 0.16668C7.49998 0.16668 0.833313 0.700013 0.833313 1.23335Z"
          fill="black"
        />
      </svg>
    </div>
  )
}
export default ChooseLineButton
