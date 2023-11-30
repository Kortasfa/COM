import React, { useState } from 'react'
import workspaceStyles from './Components/Workspace.module.css'
import { SlidesData } from './Components/SlideData/Slides'
import { Editor } from './Components/Editor/Editor'
import { exportSlidesToJson } from './utils/exportSlidesToJson'
import { Header } from './Components/Header'

function App() {
  const [slidesData, setSlidesData] = useState(SlidesData)
  const [selectedSlide, setSelectedSlide] = useState(SlidesData[0])

  const handleExportClick = () => {
    exportSlidesToJson(slidesData)
  }
  const handleSelectedSlide = (slideIndex: number) => {
    const newSelectedSlide = SlidesData[slideIndex]
    setSelectedSlide(newSelectedSlide)
  }

  const handleDeleteSlide = () => {
    if (selectedSlide) {
      const newSlidesData = slidesData.filter((slide) => slide !== selectedSlide)
      setSlidesData(newSlidesData)

      const currentIndex = SlidesData.indexOf(selectedSlide)
      const nextSlide = newSlidesData[currentIndex] || newSlidesData[currentIndex - 1] || null
      setSelectedSlide(nextSlide)
    }
  }

  return (
    <>
      <div>
        <Header />
        <div className={workspaceStyles.workspace}>
          <button onClick={handleExportClick}>Export</button>
          <div className={workspaceStyles.sidePanel}>
            <Editor name={'Editor'} slides={slidesData} selectSlide={handleSelectedSlide} selectObject={[2]} />
          </div>
          <div className={workspaceStyles.mainArea}>
            <div className={workspaceStyles.canvas}>
              <div className={workspaceStyles.slidesView}>{selectedSlide}</div>
            </div>
            <div className={workspaceStyles.notesFieldBlock}></div>
          </div>
          <button onClick={handleDeleteSlide}>Delete Selected Slide</button>
        </div>
      </div>
    </>
  )
}

export default App
