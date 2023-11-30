import React, { useEffect, useState } from 'react'
import { TextBlock } from '../Block/TextBlock/TextBlock'
import topPanelStyles from '../Top-panel.module.css'
import icon from '../../images/editor/textFieldIcon.svg'

const TextFieldButton = () => {
  const [click, setClick] = useState(0)
  useEffect(() => {
    <TextBlock id={1} coordinatesX={3} coordinatesY={3} type={'text'} value={'Введите текст'} />
  })
  return (
    <button className={topPanelStyles.textFieldButton} onClick={() => setClick(click)}>
      <img src={icon} alt={''} />
    </button>
  )
}

export default TextFieldButton
