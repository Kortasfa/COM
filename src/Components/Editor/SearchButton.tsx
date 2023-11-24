import React, { useEffect, useState } from 'react'
import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
import { SlideT } from '../Slide/SlideT'
import topPanelStyles from '../Top-panel.module.css'

const SearchButton = () => {
  return (
    <div className={topPanelStyles.insertImageButton}>
      <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.542969 9.50391C0.542969 14.4648 4.58203 18.5039 9.54297 18.5039C11.6601 18.5039 13.5898 17.7383 15.1289 16.5039L25.082 26.457L26.5039 25.0508L16.543 15.0898C17.7773 13.5508 18.543 11.6211 18.543 9.50389C18.543 4.54295 14.5039 0.503891 9.54297 0.503891C4.58203 0.503891 0.542969 4.54297 0.542969 9.50391ZM2.54297 9.50391C2.54297 5.62891 5.66797 2.50391 9.54297 2.50391C13.418 2.50391 16.543 5.62891 16.543 9.50391C16.543 13.3789 13.418 16.5039 9.54297 16.5039C5.66797 16.5039 2.54297 13.3789 2.54297 9.50391Z"
          fill="black"
        />
      </svg>
    </div>
  )
}
export default SearchButton
