import React from 'react'
import topPanelStyles from './Top-panel.module.css'
import SearchButton from './Editor/SearchButton'
import NewSlideButton from './Editor/NewSlideButton'
import NewSlideMaketButton from './Editor/NewSlideMaketButton'
import UndoButton from './Editor/UndoButton'
import RedoButton from './Editor/RedoButton'
import PrintButton from './Editor/PrintButton'
import FormattingButton from './Editor/FormattingButton'
import ScaleButton from './Editor/ScaleButton'
import ScaleValueButton from './Editor/ScaleValueButton'
import ChooseButton from './Editor/ChooseButton'
import TextFieldButton from './Editor/TextFieldButton'
import InsertImageButton from './Editor/InsertImageButton'
import FigureButton from './Editor/FigureButton'
import LineButton from './Editor/LineButton'
import ChooseLineButton from './Editor/ChooseLineButton'
import AddCommentButton from './Editor/AddCommentButton'
import InputMethodsButton from './Editor/InputMethodsButton'
import ChooseInputMethodsButton from './Editor/ChooseInputMethodsButton'

const Header = () => {
  return (
    <div className={topPanelStyles.topPanel}>
      <div className={topPanelStyles.titleBar}></div>
      <div className={topPanelStyles.menuPanel}></div>
      <div className={topPanelStyles.editorPanel}>
        <SearchButton />
        <NewSlideButton />
        <NewSlideMaketButton />
        <UndoButton />
        <RedoButton />
        <PrintButton />
        <FormattingButton />
        <ScaleButton />
        <ScaleValueButton />
        <ChooseButton />
        <TextFieldButton />
        <InsertImageButton />
        <FigureButton />
        <LineButton />
        <ChooseLineButton />
        <AddCommentButton />
        <InputMethodsButton />
        <ChooseInputMethodsButton />
      </div>
    </div>
  )
}

export { Header }
