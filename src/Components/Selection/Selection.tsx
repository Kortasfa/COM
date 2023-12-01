import SelectionObject from './SelectionObject/SelectionObject'
import SelectionSlide from './SelectionSlide/SelectionSlide'
import React from 'react'

export type SelectionSlides = {
  selectSlide: number
  onSelectSlide: (index: number) => void
  selectObject?: number[]
}

// export default function Selection({ selectSlide, selectObject }: SelectionSlides) {
//   return (
//     <div>
//       <SelectionSlide number={selectSlide} />
//       {selectSlide.length === 1 ? selectObject.map((num, idx) => <SelectionObject key={idx} number={num} />) : null}
//     </div>
//   )
//}
