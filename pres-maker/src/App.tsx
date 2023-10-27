import React from 'react'
import './App.css'
import { Slide } from './Components/Slide/Slide'
import { GraphicObject } from './Components/Block/GraphicObject/GraphicObject'
import { ImageBlock } from './Components/Block/ImageBlock/ImageBlock'
import { Editor } from './Components/Editor/Editor'
import { TextBlock } from './Components/Block/TextBlock/TextBlock'

const FirstSlide = (
  <Slide
    key={1}
    id={1}
    background={'white'}
    objects={[
      <GraphicObject
        id={2}
        key={1}
        coordinatesX={10}
        coordinatesY={10}
        graphicObjectType={'rectangle'}
        borderSize={20}
      />,
      <ImageBlock
        id={3}
        key={2}
        coordinatesX={1}
        coordinatesY={2}
        src={
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII='
        }
      />,
    ]}
  />
)

const SecondSlide = (
  <Slide
    key={1}
    id={1}
    background={'white'}
    objects={[<TextBlock id={1} coordinatesX={10} coordinatesY={12} value={'123'} key={1} />]}
  />
)

function App() {
  return (
    <>
      <div>
        <header>
          <div className="top-panel">
            <div className="top-panel__title-bar"></div>
            <div className="top-panel__menu-panel"></div>
            <div className="top-panel__editor-panel"></div>
          </div>
        </header>
        <div className="workspace">
          <div className="workspace__side-panel">
            <Editor name={'213'} slides={[FirstSlide, SecondSlide]} selectSlide={[1]} selectObject={[2]} />
          </div>
          <div className="workspace__main-area">
            <div className="workspace__canvas">
              <div className="slides-view">{FirstSlide}</div>
            </div>
            <div className="workspace__notes-field-block"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
