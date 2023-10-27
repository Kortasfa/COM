import Selection, { SelectionSlides } from '../Selection/Selection'
import { Doc, DocType } from '../Doc/Doc'
import React from 'react'

type EditorType = DocType & SelectionSlides

const Editor = ({ slides, name, selectSlide, selectObject }: EditorType) => (
  <>
    <Doc slides={slides} name={name} />
    <Selection selectObject={selectObject} selectSlide={selectSlide} />
  </>
)

export { Editor }
