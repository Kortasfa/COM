import React from 'react';
import './App.css';
// import { Slide } from "./Components/Slide/Slide";
// import { GraphicObject } from "./Components/Block/GraphicObject/GraphicObject";
// import { ImageBlock } from "./Components/Block/ImageBlock/ImageBlock";
import { TextBlock } from "./Components/Block/TextBlock/TextBlock";

function App() {
  return (
    <div>
      <header>
        <div className="top-panel">
          <div className="top-panel__title-bar"></div>
          <div className="top-panel__menu-panel"></div>
          <div className="top-panel__editor-panel"></div>
        </div>
      </header>
      <div className="workspace">
        <div className="workspace__side-panel"></div>
        <div className="workspace__main-area">
          <div className="workspace__canvas">
            <div className="slides-view">
              <TextBlock id={1} coordinatesX={10} coordinatesY={10} sizeX={40} sizeY={40} borderSize={2} borderColor={"black"} value={"Введите текст"} fillColor={"white"} textColor={"black"} textFont={"Arial"} textSize={12} textBoldness={false} textUnderlines={false} textItalic={false} textHighlight={''} />
            </div>
          </div>
          <div className="workspace__notes-field-block"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
