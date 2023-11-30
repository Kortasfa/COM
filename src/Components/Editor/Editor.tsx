import Selection, { SelectionSlides } from '../Selection/Selection'
import { Doc, DocType } from '../Doc/Doc'
import React from 'react'

type EditorType = DocType & SelectionSlides

const Editor = ({ slides, name, selectSlide, selectObject }: EditorType) => (
  <button style={{ width: '100%', height: '100%' }}>
    <Doc slides={slides} name={name} />
    <Selection selectObject={selectObject} selectSlide={selectSlide} />
  </button>
)

export { Editor }
