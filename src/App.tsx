import React, { useState } from 'react'
import SlideImportExport, {SlideDataType} from "./Components/transfer/Import"
import workspaceStyles from "./Components/Workspace.module.css";
import { SlidesData } from './Components/SlideData/Slides'
import { Editor } from './Components/Editor/Editor'
import { Header } from './Components/Header'

function App() {
  const [slidesData, setSlidesData] = useState<SlideDataType>(null);
  return (
    <>
      <div>
        <Header />
        <div className={workspaceStyles.workspace}>
          <div className={workspaceStyles.sidePanel}>
            <Editor name={'Editor'} slides={SlidesData} selectSlide={[1]} selectObject={[2]} />
            <SlideImportExport slidesData={slidesData} setSlidesData={setSlidesData} />
            {slidesData && <Editor name={"Editor"} slides={slidesData} selectSlide={[1]} selectObject={[2]} />}
          </div>
          <div className={workspaceStyles.mainArea}>
            <div className={workspaceStyles.canvas}>
              <div className={workspaceStyles.slidesView}>{SlidesData[0]}</div>
              {slidesData && slidesData.length > 0 && <div className={workspaceStyles.slidesView}>{slidesData[0]}</div>}
            </div>
            <div className={workspaceStyles.notesFieldBlock}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

