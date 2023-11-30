import React, { useState } from 'react'
import SlideDataManager, { SlideDataType } from './Components/SlideManager/SlideOrganizer'
import { WorkSpace } from './Components/WorkSpace'
import { Header } from './Components/Header'
import { startSlideData } from './Components/StartPanel/startSlide'

function App() {
  const [slidesData, setSlidesData] = useState<SlideDataType>(startSlideData)
  return (
    <section>
      <Header />
      <SlideDataManager slidesData={slidesData} setSlidesData={setSlidesData} />
      <WorkSpace slidesData={slidesData} setSlidesData={setSlidesData} />
    </section>
  )
}

export default App
