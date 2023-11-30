import { SelectionSlides } from '../Selection/Selection'
import { Doc, DocType } from '../Doc/Doc'
import React from 'react'

type EditorType = DocType & SelectionSlides

const Editor = ({ slides, name, selectSlide, selectObject }: EditorType) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Doc slides={slides} onSelectSlide={selectSlide} name={'123'} />
      {/*<Selection selectObject={selectObject} selectSlide={selectSlide} />*/}
    </div>
  )
}

export { Editor }
