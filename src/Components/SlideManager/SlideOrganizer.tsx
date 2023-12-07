import React, { useRef } from 'react'
import { exportSlidesToJson } from './Export'
import workspaceStyles from '../Workspace.module.css'
import { SlideProps, transformData } from './Import'

const SlideDataManager = ({ slidesData, setSlidesData }: SlideProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleExportClick = () => {
    if (slidesData) {
      exportSlidesToJson(slidesData)
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
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

  return (
    <div className={workspaceStyles.importExportButton}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileLoader}
        className={workspaceStyles.loader}
        accept=".json"
      />
      <button className={workspaceStyles.exportButton} onClick={handleExportClick}>Export</button>
      <button className={workspaceStyles.importButton} onClick={handleButtonClick}>Import</button>
    </div>
  )
}
export type SlideDataType = JSX.Element[] | null
export default SlideDataManager
