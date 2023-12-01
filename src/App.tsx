import React, { useState } from 'react'
import SlideDataManager, { SlideDataType } from './Components/SlideManager/SlideOrganizer'
import { WorkSpace } from './Components/WorkSpace'
import { Header } from './Components/Header'
import { SlidesData } from './testData/Slides'

function App() {
  const [slidesData, setSlidesData] = useState<SlideDataType>(SlidesData)
  const [selectSlide, setSelectSlide] = useState<number>(0)
  return (
    <section>
      <Header />
      <SlideDataManager
        slidesData={slidesData}
        setSlidesData={setSlidesData}
        onSelectSlide={setSelectSlide}
        selectSlide={selectSlide}
      />
      <WorkSpace
        slidesData={slidesData}
        setSlidesData={setSlidesData}
        onSelectSlide={setSelectSlide}
        selectSlide={selectSlide}
        selectObject={[0]}
      />
    </section>
  )
}

export default App
