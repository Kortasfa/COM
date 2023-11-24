import React from "react";

type SelectionSlideProps = {
  number: number[];
};

const SelectionSlide: React.FC<SelectionSlideProps> = ({ number }) => {
  return (
    <div className="selection-slide">
      {Array.isArray(number) ? number.map((num, idx) => <span key={idx}>{num}</span>) : <span>{number}</span>}
    </div>
  );
};

export default SelectionSlide;
