import React from 'react'

type SelectionObjectProps = {
  number: number | [number]
}

const SelectionObject: React.FC<SelectionObjectProps> = ({ number }) => {
  return (
    <div className="selection-object">
      {Array.isArray(number) ? number.map((num, idx) => <span key={idx}>{num}</span>) : <span>{number}</span>}
    </div>
  )
}

export default SelectionObject
