import React, { useRef, useState } from 'react'
import topPanelStyles from '../Top-panel.module.css'
import imageBlockStyles from '../Block/ImageBlock/ImageBlock.module.css'
const InsertImageButton = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imageSrc, setImageSrc] = useState<string | null>(null)
  const handleFileLoader = () => {
    if (fileInputRef.current) {
      const selectedFile = fileInputRef.current.files?.[0]

      if (selectedFile) {
        const reader = new FileReader()

        reader.onloadend = () => {
          const base64Data = reader.result as string
          setImageSrc(base64Data)
        }
        reader.readAsDataURL(selectedFile)
      }
    }
  }

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className={topPanelStyles.insertImageButton} onClick={handleClick}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileLoader}
        className={topPanelStyles.loader}
        accept=".png"
      />
      <svg width="21" height="21" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.76669 2.9C0.900026 5.03333 0.500026 8.63333 0.500026 24.7667C0.500026 49.8333 -0.833307 48.5 24.7667 48.5C49.8334 48.5 48.5 49.8333 48.5 24.2333C48.5 -0.833334 49.8334 0.499997 24.2334 0.499997C7.16669 0.499997 4.63336 0.766664 2.76669 2.9ZM44.2334 19.4333C44.3667 27.4333 44.1 33.8333 43.4334 33.8333C42.9 33.8333 40.6334 31.9667 38.5 29.8333C34.2334 25.4333 31.0334 24.7667 28.5 27.8333C27.0334 29.5667 26.1 29.1667 21.7 25.1667C15.4334 19.5667 13.1667 19.4333 8.23336 24.1L4.50003 27.7V17.0333C4.50003 11.0333 4.90003 5.83333 5.43336 5.3C5.96669 4.9 14.7667 4.63333 25.0334 4.76666L43.8334 5.16666L44.2334 19.4333ZM18.9 28.9L23.1667 33.3L17.3 39.0333C9.70003 46.5 5.43336 46.3667 4.76669 38.6333C4.36669 34.3667 5.03336 32.7667 8.63336 29.0333C11.0334 26.5 13.4334 24.5 13.8334 24.5C14.2334 24.5 16.5 26.5 18.9 28.9ZM39.0334 35.7C42.2334 38.9 44.3667 42.2333 43.9667 43.0333C43.3 43.9667 37.9667 44.5 30.1 44.5H17.3L24.5 37.1667C28.5 33.1667 32.1 29.8333 32.5 29.8333C32.9 29.8333 35.8334 32.5 39.0334 35.7Z"
          fill="black"
        />
        <path
          d="M28.7667 11.4333C26.7667 13.4333 26.7667 18.2333 28.7667 20.2333C30.7667 22.2333 35.5667 22.2333 37.5667 20.2333C41.3001 16.4999 38.5001 9.83328 33.1667 9.83328C31.5667 9.83328 29.7001 10.4999 28.7667 11.4333ZM35.1667 15.8333C35.1667 16.8999 34.2334 17.8333 33.1667 17.8333C32.1001 17.8333 31.1667 16.8999 31.1667 15.8333C31.1667 14.7666 32.1001 13.8333 33.1667 13.8333C34.2334 13.8333 35.1667 14.7666 35.1667 15.8333Z"
          fill="black"
        />
      </svg>
    </div>
  )
}

//  {imageSrc && <div className={imageBlockStyles.imageBlock}>
//     <img src={`${imageSrc}`} alt="Inserted Image" />
//   </div>}
export default InsertImageButton
