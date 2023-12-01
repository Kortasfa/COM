import workspaceStyles from './Workspace.module.css'
import { Editor } from './Editor/Editor'
import React from 'react'
import { SlideProps } from './SlideManager/Import'
import { SelectionSlides } from './Selection/Selection'

const WorkSpace = ({ slidesData, setSlidesData, onSelectSlide, selectSlide }: SlideProps & SelectionSlides) => {
  return (
    <div className={workspaceStyles.workspace}>
      <div className={workspaceStyles.sidePanel}>
        {slidesData && <Editor slides={slidesData} onSelectSlide={onSelectSlide} selectObject={[0]} selectSlide={0} />}
      </div>
      <div className={workspaceStyles.mainArea}>
        <div className={workspaceStyles.canvas}>
          {slidesData && <div className={workspaceStyles.slidesView}>{slidesData[selectSlide]}</div>}
        </div>
        <div className={workspaceStyles.notesFieldBlock}></div>
      </div>
    </div>
  )
}
export { WorkSpace }
