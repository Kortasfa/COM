import { useState } from "react";

type SelectionSlideProps = {
    number: number | [number];
}

const SelectionSlide = ({ number }: SelectionSlideProps) => {
    const [numberOfSlides, setNumberOfSlides] = useState(number);

    return (
        <p>123</p>
    );
}

export default SelectionSlide;
