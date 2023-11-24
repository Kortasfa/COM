import React from 'react'
import topPanelStyles from './Components/Top-panel.module.css'
import workspaceStyles from './Components/Workspace.module.css'
import { Slide } from './Components/Slide/Slide'
import { GraphicObject } from './Components/Block/GraphicObject/GraphicObject'
import { ImageBlock } from './Components/Block/ImageBlock/ImageBlock'
import { Editor } from './Components/Editor/Editor'
import { TextBlock } from './Components/Block/TextBlock/TextBlock'

const FirstSlide = () => {
  return (
    <Slide
      key={1}
      id={1}
      background={'white'}
      objects={[
        <TextBlock
          id={1}
          key={1}
          coordinatesX={12}
          coordinatesY={13}
          textSize={12}
          sizeY={12}
          sizeX={20}
          value={'Hello Andrey!'}
        />,
        <GraphicObject
          id={2}
          key={1}
          coordinatesX={10}
          coordinatesY={10}
          sizeX={12}
          sizeY={12}
          graphicObjectType={'rectangle'}
          borderSize={20}
        />,
        <ImageBlock
          id={3}
          key={2}
          coordinatesX={10}
          coordinatesY={2}
          sizeX={10}
          sizeY={15}
          src={
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII='
          }
        />,
      ]}
    />
  )
}

const SecondSlide = (
  <Slide
    key={1}
    id={1}
    background={'white'}
    objects={[
      <GraphicObject id={2} key={1} coordinatesX={10} coordinatesY={10} graphicObjectType={'circle'} borderSize={20} />,
      <TextBlock id={1} coordinatesX={10} coordinatesY={12} textSize={40} value={'123'} key={1} />,
    ]}
  />
)

function App() {
  return (
    <>
      <div>
        <header>
          <div className={topPanelStyles.topPanel}>
            <div className={topPanelStyles.titleBar}></div>
            <div className={topPanelStyles.menuPanel}></div>
            <div className={topPanelStyles.editorPanel}>
              <div className={topPanelStyles.searchButton}>
                <svg width="20" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.0214844 4.50196C0.0214844 6.98242 2.04101 9.00196 4.52148 9.00196C5.58007 9.00196 6.54492 8.61915 7.31445 8.00196L12.291 12.9785L13.002 12.2754L8.02148 7.29492C8.63867 6.52539 9.02148 5.56054 9.02148 4.50195C9.02148 2.02148 7.00195 0.0019455 4.52148 0.0019455C2.04101 0.0019455 0.0214844 2.02149 0.0214844 4.50196ZM1.02148 4.50196C1.02148 2.56446 2.58398 1.00196 4.52148 1.00196C6.45898 1.00196 8.02148 2.56446 8.02148 4.50196C8.02148 6.43946 6.45898 8.00196 4.52148 8.00196C2.58398 8.00196 1.02148 6.43946 1.02148 4.50196Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={topPanelStyles.newSlideButton}>
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.6667 9.33333V14.6667H9.33333C6.4 14.6667 4 15.2 4 16C4 16.6667 6.4 17.3333 9.33333 17.3333H14.6667V22.6667C14.6667 25.6 15.3333 28 16 28C16.8 28 17.3333 25.6 17.3333 22.6667V17.3333H22.6667C25.6 17.3333 28 16.6667 28 16C28 15.2 25.6 14.6667 22.6667 14.6667H17.3333V9.33333C17.3333 6.4 16.8 4 16 4C15.3333 4 14.6667 6.4 14.6667 9.33333Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={topPanelStyles.newSlideMaketButton}>
                <svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.30002 5.70002C7.83336 8.63336 10.1 10.9 10.5 10.9C10.9 10.9 13.1667 8.63336 15.7 5.70002L20.1 0.500024H10.5H0.900024L5.30002 5.70002Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={topPanelStyles.undoButton}></div>
              <div className={topPanelStyles.redoButton}></div>
              <div className={topPanelStyles.printButton}>
                <svg width="21" height="21" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.968"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5 0C8.5 0 12.5 0 16.5 0C16.5 1.33333 16.5 2.66667 16.5 4C17.8333 4 19.1667 4 20.5 4C20.5 7.33333 20.5 10.6667 20.5 14C19.1667 14 17.8333 14 16.5 14C16.5 15.3333 16.5 16.6667 16.5 18C12.5 18 8.5 18 4.5 18C4.5 16.6667 4.5 15.3333 4.5 14C3.16667 14 1.83333 14 0.5 14C0.5 10.6667 0.5 7.33333 0.5 4C1.83333 4 3.16667 4 4.5 4C4.5 2.66667 4.5 1.33333 4.5 0ZM6.5 2C9.2469 1.68665 11.9135 2.01998 14.5 3C13.1667 3.33333 11.8333 3.66667 10.5 4C8.66723 3.91456 7.3339 3.2479 6.5 2ZM17.5 7C18.7879 8.5348 18.7879 10.2015 17.5 12C12.8333 9.3333 8.16667 9.3333 3.5 12C2.24039 10.1471 2.24039 8.3138 3.5 6.5C8.35219 5.68492 13.0189 5.85159 17.5 7ZM6.5 12C9.1667 12 11.8333 12 14.5 12C14.5 13.3333 14.5 14.6667 14.5 16C11.8333 16 9.1667 16 6.5 16C6.5 14.6667 6.5 13.3333 6.5 12Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={topPanelStyles.fotmattingButton}>
                <svg width="21" height="21" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.53334 4.10002C0.0666699 8.10002 1 13.9667 3.4 15.4334C4.33334 15.9667 12.0667 16.5 20.6 16.5C35.2667 16.5 36.3333 16.3667 38.2 13.5667C40.3333 10.6334 40.3333 10.6334 40.3333 14.7667C40.3333 18.7667 40.2 18.9 30.0667 21.3C23.1333 23.0334 19.4 24.6334 18.4667 26.5C17.6667 27.8334 16.2 29.8334 15.4 30.9C13 33.4334 13.1333 45.1667 15.5333 47.0334C16.6 47.9667 19.1333 48.5 21.2667 48.2334C24.8667 47.8334 25 47.4334 25.4 39.8334C25.8 33.4334 25.4 31.5667 23.4 30.1C20.3333 27.9667 22.3333 26.5 30.2 25.3C40.6 23.7 44.0667 21.9667 45 17.9667C45.9333 13.5667 43.8 7.16669 41.4 7.16669C40.4667 7.16669 39 5.83336 38.3333 4.10002C37 1.30002 36.2 1.16669 19.9333 0.766689L3 0.366689L1.53334 4.10002ZM35 8.50002V12.5H20.3333H5.66667V8.50002V4.50002H20.3333H35V8.50002ZM21.6667 39.1667C21.6667 43.0334 21.1333 44.5 19.6667 44.5C18.2 44.5 17.6667 43.0334 17.6667 39.1667C17.6667 35.3 18.2 33.8334 19.6667 33.8334C21.1333 33.8334 21.6667 35.3 21.6667 39.1667Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={topPanelStyles.scaleButton}>
                <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 9C0 13.9609 4.03906 18 9 18C11.1172 18 13.0469 17.2344 14.5859 16L24.5391 25.9531L25.9609 24.5469L16 14.5859C17.2344 13.0469 18 11.1172 18 8.99998C18 4.03904 13.9609 -1.52588e-05 9 -1.52588e-05C4.03906 -1.52588e-05 0 4.03906 0 9ZM2 9C2 5.125 5.125 2 9 2C12.875 2 16 5.125 16 9C16 12.875 12.875 16 9 16C5.125 16 2 12.875 2 9Z"
                    fill="black"
                  />
                  <path
                    d="M8.43478 4.22199C8.26087 4.39278 8.13043 5.37485 8.13043 6.35692V8.19297L6.08696 8.32107C4.56522 8.40646 4 8.61996 4 9.08964C4 9.55933 4.56522 9.77282 6.04348 9.85822L8.08696 9.98632L8.21739 11.9932C8.30435 13.4449 8.52174 14 9 14C9.47826 14 9.69565 13.4449 9.78261 11.9932L9.91304 9.98632L11.9565 9.85822C13.4348 9.77282 14 9.55933 14 9.08964C14 8.61996 13.4348 8.40646 11.9565 8.32107L9.91304 8.19297L9.78261 6.22883C9.65217 4.35008 9.13043 3.58151 8.43478 4.22199Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={topPanelStyles.scaleValueButton}>
                <span>По шир</span>
              </div>
              <div className={topPanelStyles.chooseButton}>
                <svg width="21" height="21" viewBox="0 0 27 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.782"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0.999994C1.3734 0.843314 2.7068 1.00998 4 1.49999C10.8638 8.69829 18.0305 15.5316 25.5 22C25.99 23.2932 26.1567 24.6266 26 26C23.0178 25.6044 20.3511 26.2711 18 28C19.8604 31.5825 21.5271 35.2492 23 39C20.3973 42.423 17.064 43.423 13 42C11.6026 38.2056 9.9359 34.5389 8 31C5.9763 33.7057 3.3097 35.039 0 35C0 23.6667 0 12.3333 0 0.999994ZM3 6.99999C8.4969 12.3292 14.1635 17.4958 20 22.5C17.6902 22.9966 15.3568 23.1633 13 23C13.6565 28.1539 15.3232 32.9873 18 37.5C17.5 38 17 38.5 16.5 39C14.7635 34.9578 12.9301 30.9578 11 27C8.0717 25.7123 5.5717 26.379 3.5 29C3.0003 21.6742 2.8337 14.3409 3 6.99999Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={topPanelStyles.textFieldButton}>
                <svg width="21" height="21" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.908"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.64844 0.648438C6.66227 0.482928 10.6622 0.649588 14.6484 1.14844C16.3038 2.59269 16.9704 4.42603 16.6484 6.64844C25.9817 6.64844 35.3151 6.64844 44.6484 6.64844C44.3264 4.42603 44.993 2.59269 46.6484 1.14844C59.1484 -2.35156 63.6484 2.14844 60.1484 14.6484C58.7041 16.3038 56.8708 16.9704 54.6484 16.6484C54.6484 25.9817 54.6484 35.3151 54.6484 44.6484C56.8708 44.3264 58.7041 44.993 60.1484 46.6484C63.6484 59.1484 59.1484 63.6484 46.6484 60.1484C44.993 58.7041 44.3264 56.8708 44.6484 54.6484C35.3151 54.6484 25.9817 54.6484 16.6484 54.6484C16.9704 56.8708 16.3038 58.7041 14.6484 60.1484C2.14844 63.6484 -2.35156 59.1484 1.14844 46.6484C2.59269 44.993 4.42603 44.3264 6.64844 44.6484C6.64844 35.3151 6.64844 25.9817 6.64844 16.6484C4.42603 16.9704 2.59269 16.3038 1.14844 14.6484C0.114012 9.69154 0.614017 5.02484 2.64844 0.648438ZM6.64844 4.64844C12.6361 4.81239 13.9694 7.31239 10.6484 12.1484C4.55183 12.2959 3.2185 9.79594 6.64844 4.64844ZM50.6484 4.64844C56.6361 4.81239 57.9694 7.31239 54.6484 12.1484C48.5518 12.2959 47.2185 9.79594 50.6484 4.64844ZM16.6484 10.6484C25.9817 10.6484 35.3151 10.6484 44.6484 10.6484C44.3151 14.9817 46.3151 16.9817 50.6484 16.6484C50.6484 25.9817 50.6484 35.3151 50.6484 44.6484C46.3151 44.3151 44.3151 46.3151 44.6484 50.6484C35.3151 50.6484 25.9817 50.6484 16.6484 50.6484C16.9817 46.3151 14.9817 44.3151 10.6484 44.6484C10.6484 35.3151 10.6484 25.9817 10.6484 16.6484C14.9817 16.9817 16.9817 14.9817 16.6484 10.6484ZM20.6484 20.6484C27.3151 20.6484 33.9817 20.6484 40.6484 20.6484C40.6484 21.9817 40.6484 23.3151 40.6484 24.6484C37.9817 24.6484 35.3151 24.6484 32.6484 24.6484C32.6484 29.9817 32.6484 35.3151 32.6484 40.6484C31.3151 40.6484 29.9817 40.6484 28.6484 40.6484C28.6484 35.3151 28.6484 29.9817 28.6484 24.6484C25.9817 24.6484 23.3151 24.6484 20.6484 24.6484C20.6484 23.3151 20.6484 21.9817 20.6484 20.6484ZM6.64844 48.6484C12.6361 48.8124 13.9694 51.3124 10.6484 56.1484C4.55183 56.2959 3.2185 53.7959 6.64844 48.6484ZM50.6484 48.6484C56.6361 48.8124 57.9694 51.3124 54.6484 56.1484C48.5518 56.2959 47.2185 53.7959 50.6484 48.6484Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={topPanelStyles.insertImageButton}>
                <svg width="21" height="21" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.856"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 1.00003C13.1719 0.833529 23.8385 1.00019 34.5 1.50003C35 2.00003 35.5 2.50003 36 3.00003C36.6667 13.6667 36.6667 24.3333 36 35C35.5 35.5 35 36 34.5 36.5C23.8333 37.1667 13.1667 37.1667 2.5 36.5C2 36 1.5 35.5 1 35C0.333332 24.3333 0.333332 13.6667 1 3.00003C1.71719 2.45583 2.21719 1.78916 2.5 1.00003ZM6.5 4.00003C14.8886 3.69683 23.222 4.03016 31.5 5.00003C32.1924 5.52533 32.6924 6.19193 33 7.00003C33.6667 13.3333 33.6667 19.6667 33 26C31.1667 24.1667 29.3333 22.3333 27.5 20.5C24.6529 19.5561 22.1529 20.0561 20 22C16.7788 17.7269 12.6122 15.8935 7.5 16.5C6.3333 17.6667 5.1667 18.8333 4 20C3.33333 15.6667 3.33333 11.3333 4 7.00003C4.69794 5.80943 5.5313 4.80946 6.5 4.00003ZM9.5 20C12.2254 21.213 14.5588 23.0464 16.5 25.5C13.6511 28.5162 10.6511 31.3496 7.5 34C3.94489 32.4235 2.77823 29.7568 4 26C6.0396 24.1298 7.8729 22.1298 9.5 20ZM23.5 24C27.0801 25.9076 30.0801 28.5743 32.5 32C31.9747 32.6924 31.3081 33.1924 30.5 33.5C25.1667 34.1667 19.8333 34.1667 14.5 33.5C17.7044 30.4641 20.7044 27.2974 23.5 24Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={topPanelStyles.figureButton}>
                <svg width="21" height="21" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.799"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.50001 0.999962C17.68 -0.815678 24.18 1.51765 29 7.99996C30.128 9.84526 30.628 11.8453 30.5 14C33.8333 14 37.1667 14 40.5 14C40.5 23 40.5 32 40.5 41C31.5 41 22.5 41 13.5 41C13.5 37.6667 13.5 34.3333 13.5 31C2.25511 28.5283 -1.91155 21.5283 1.00001 9.99996C2.68785 5.81477 5.52118 2.81477 9.50001 0.999962ZM12.5 4.99996C19.5438 4.05732 24.2105 6.89066 26.5 13.5C22.1794 13.999 17.8461 14.1657 13.5 14C13.6657 18.3461 13.499 22.6794 13 27C5.21998 23.6738 2.88665 18.0071 6.00001 9.99996C7.80491 7.67426 9.97161 6.00763 12.5 4.99996ZM17.5 18C20.5184 17.8354 23.5184 18.002 26.5 18.5C25 22.6667 22.1667 25.5 18 27C17.502 24.0184 17.3354 21.0184 17.5 18ZM30.5 18C32.5 18 34.5 18 36.5 18C36.5 24.3333 36.5 30.6667 36.5 37C30.1667 37 23.8333 37 17.5 37C17.5 35 17.5 33 17.5 31C25.5 30.3333 29.8333 26 30.5 18Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={topPanelStyles.lineButton}>
                <svg width="21" height="21" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.807"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.499994 1.00006C1.87343 0.843375 3.20676 1.01005 4.49999 1.50006C15.6667 12.6668 26.8333 23.8334 38 35.0001C38.49 36.2933 38.6567 37.6267 38.5 39.0001C37.1266 39.1568 35.7932 38.9901 34.5 38.5001C23.3333 27.3334 12.1667 16.1668 0.999994 5.00006C0.509984 3.70683 0.343314 2.3735 0.499994 1.00006Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={topPanelStyles.chooseLineButton}>
                <svg width="11" height="21" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.30002 5.70002C7.83336 8.63336 10.1 10.9 10.5 10.9C10.9 10.9 13.1667 8.63336 15.7 5.70002L20.1 0.500024H10.5H0.900024L5.30002 5.70002Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={topPanelStyles.addCommentButton}>
                <svg width="21" height="21" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.875"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 3.99995C18.004 3.83338 32.004 4.00004 46 4.49995C46.5 4.99995 47 5.49995 47.5 5.99995C48.1667 15.9999 48.1667 25.9999 47.5 35.9999C47 36.4999 46.5 36.9999 46 37.4999C37.6667 37.8332 29.3333 38.1666 21 38.4999C18.4461 44.1095 14.1128 46.6095 8 45.9999C8.4802 43.4953 9.4802 41.162 11 38.9999C7.90739 38.5018 5.07406 37.5018 2.5 35.9999C1.83333 25.9999 1.83333 15.9999 2.5 5.99995C3.21719 5.45575 3.71719 4.78908 4 3.99995ZM7 5.99995C19.3836 5.68656 31.717 6.01989 44 6.99995C44.6924 7.52522 45.1924 8.19189 45.5 8.99995C46.3029 17.3821 46.1362 25.7154 45 33.9999C44.4747 34.6923 43.8081 35.1923 43 35.4999C34.6468 35.6682 26.3134 36.1682 18 36.9999C14.7087 43.4933 13.2087 43.4933 13.5 36.9999C11.4307 36.2361 9.26399 35.7361 7 35.4999C5.83333 34.9999 5 34.1666 4.5 32.9999C3.83333 24.9999 3.83333 16.9999 4.5 8.99995C5.19794 7.80938 6.03128 6.80938 7 5.99995Z"
                    fill="black"
                  />
                  <path
                    d="M23.7778 14.8889V19.7778H18.8889C16.2 19.7778 14 20.2667 14 21C14 21.6111 16.2 22.2222 18.8889 22.2222H23.7778V27.1111C23.7778 29.8 24.3889 32 25 32C25.7333 32 26.2222 29.8 26.2222 27.1111V22.2222H31.1111C33.8 22.2222 36 21.6111 36 21C36 20.2667 33.8 19.7778 31.1111 19.7778H26.2222V14.8889C26.2222 12.2 25.7333 10 25 10C24.3889 10 23.7778 12.2 23.7778 14.8889Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className={topPanelStyles.inputMzethodsButton}></div>
              <div className={topPanelStyles.chooseInputMethodsButton}>
                <svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.30002 5.70002C7.83336 8.63336 10.1 10.9 10.5 10.9C10.9 10.9 13.1667 8.63336 15.7 5.70002L20.1 0.500024H10.5H0.900024L5.30002 5.70002Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </header>
        <div className={workspaceStyles.workspace}>
          <div className={workspaceStyles.sidePanel}>
            <Editor name={'213'} slides={[<FirstSlide key={1} />, SecondSlide]} selectSlide={[1]} selectObject={[2]} />
          </div>
          <div className={workspaceStyles.mainArea}>
            <div className={workspaceStyles.canvas}>
              <div className={workspaceStyles.slidesView}>
                <FirstSlide />
              </div>
            </div>
            <div className={workspaceStyles.notesFieldBlock}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
