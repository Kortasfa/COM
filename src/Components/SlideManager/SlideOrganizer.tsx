import React, { useRef } from 'react'
import { exportSlidesToJson } from './Export'
import workspaceStyles from '../Workspace.module.css'
import { SlideProps, transformData } from './Import'
import { SelectionSlides } from '../Selection/Selection'
import { startSlideData } from '../StartPanel/startSlide'

const SlideDataManager = ({ slidesData, setSlidesData, selectSlide, onSelectSlide }: SlideProps & SelectionSlides) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleExportClick = () => {
    if (slidesData) {
      exportSlidesToJson(slidesData)
    }
  }

  const handleImportClick = () => {
    fileInputRef.current?.click()
  }

  const handleDeleteClick = () => {
    if (selectSlide >= 0 && slidesData) {
      const newSlidesData = slidesData?.filter((slide) => slide !== slidesData[selectSlide])
      setSlidesData(newSlidesData)

      onSelectSlide(selectSlide - 1)
    }
  }

  const handleAddSlideClick = () => {
    if (slidesData) {
      const combinedSlidesData = [...startSlideData, ...slidesData]
      setSlidesData(combinedSlidesData)
    }
  }

  const handleFileLoader = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileReader = new FileReader()
      fileReader.readAsText(event.target.files[0], 'UTF-8')
      fileReader.onload = (e) => {
        const result = (e.target as FileReader).result
        if (typeof result === 'string') {
          const newData = JSON.parse(result)
          const transformedSlides = transformData(newData)
          if (transformedSlides) {
            setSlidesData(transformedSlides)
          }
        }
      }
    }
  }

  const moveSlideUp = () => {
    if (selectSlide > 0 && slidesData) {
      const newSlidesData = [...slidesData]
      ;[newSlidesData[selectSlide - 1], newSlidesData[selectSlide]] = [
        newSlidesData[selectSlide],
        newSlidesData[selectSlide - 1],
      ]
      setSlidesData(newSlidesData)
      onSelectSlide(selectSlide - 1)
    }
  }

  const moveSlideDown = () => {
    if (slidesData && selectSlide < slidesData.length - 1) {
      const newSlidesData = [...slidesData]
      ;[newSlidesData[selectSlide + 1], newSlidesData[selectSlide]] = [
        newSlidesData[selectSlide],
        newSlidesData[selectSlide + 1],
      ]
      setSlidesData(newSlidesData)
      onSelectSlide(selectSlide + 1)
    }
  }

  return (
    <>
      <div className={workspaceStyles.topPanel}>
        <button onClick={handleExportClick}>Export</button>
        <button onClick={handleImportClick}>Import</button>
        <button onClick={handleDeleteClick}>Delete</button>
        <button onClick={handleAddSlideClick}>Add Slide</button>
        <button onClick={moveSlideUp}>Move Up</button>
        <button onClick={moveSlideDown}>Move Down</button>
      </div>
      <div className={workspaceStyles.sidePanel}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileLoader}
          className={workspaceStyles.loader}
          accept=".json"
        />
      </div>
    </>
  )
}
export type SlideDataType = JSX.Element[] | null
export default SlideDataManager
