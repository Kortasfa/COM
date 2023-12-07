import workspaceStyles from './Workspace.module.css'
import { Editor } from './Editor/Editor'
import React from 'react'
import { SlideProps } from './SlideManager/Import'

const WorkSpace = ({ slidesData, setSlidesData }: SlideProps) => {
  return (
    <div className={workspaceStyles.workspace}>
      <div className={workspaceStyles.sidePanel}>
        {slidesData && <Editor name={'Editor'} slides={slidesData} selectSlide={[0]} selectObject={[0]} />}
      </div>
      <div className={workspaceStyles.mainArea}>
        <div className={workspaceStyles.canvas}>
          {slidesData && <div className={workspaceStyles.slidesView}>{slidesData[0]}</div>}
        </div>
        <div className={workspaceStyles.notesFieldBlock}></div>
      </div>
    </div>
  )
}
export { WorkSpace }
