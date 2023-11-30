import React from 'react'
import topPanelStyles from './Top-panel.module.css'
import NewSlideButton from './Editor/NewSlideButton'
import NewSlideMaketButton from './Editor/NewSlideMaketButton'
import UndoButton from './Editor/UndoButton'
import RedoButton from './Editor/RedoButton'
import TextFieldButton from './Editor/TextFieldButton'
import InsertImageButton from './Editor/InsertImageButton'
import FigureButton from './Editor/FigureButton'
import LineButton from './Editor/LineButton'
import ChooseLineButton from './Editor/ChooseLineButton'

const Header = () => {
  return (
    <div className={topPanelStyles.topPanel}>
      <div className={topPanelStyles.titleBar}></div>
      <div className={topPanelStyles.menuPanel}></div>
      <div className={topPanelStyles.editorPanel}>
        <NewSlideButton />
        <NewSlideMaketButton />
        <UndoButton />
        <RedoButton />
        <TextFieldButton />
        <InsertImageButton />
        <FigureButton />
        <LineButton />
        <ChooseLineButton />
      </div>
    </div>
  )
}

export { Header }
