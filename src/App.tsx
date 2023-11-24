import React, { useState } from 'react'
import workspaceStyles from './Components/Workspace.module.css'
import { SlidesDatas } from './Components/SlideData/Slides'
import { Editor } from './Components/Editor/Editor'
import { exportSlidesToJson } from './Export'
import { Header } from './Components/Header'

function App() {
  const [slidesData, setSlidesData] = useState(SlidesDatas)

  const handleExportClick = () => {
    exportSlidesToJson(slidesData)
  }
  return (
    <>
      <div>
        <Header />
        <div className={workspaceStyles.workspace}>
          <button onClick={handleExportClick}>Export</button>
          <div className={workspaceStyles.sidePanel}>
            <Editor name={'Editor'} slides={SlidesDatas} selectSlide={[1]} selectObject={[2]} />
          </div>
          <div className={workspaceStyles.mainArea}>
            <div className={workspaceStyles.canvas}>
              <div className={workspaceStyles.slidesView}>{SlidesDatas[0]}</div>
            </div>
            <div className={workspaceStyles.notesFieldBlock}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
