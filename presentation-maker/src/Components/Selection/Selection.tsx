import {useState} from "react";
import SelectionObject from "./SelectionObject/SelectionObject";
import SelectionSlide from "./SelectionSlide/SelectionSlide";

export default function Selection() {
    const [numberOfSlides, setNumberOfSlides] = useState<number | [number]>(1)
    const [numberOfObjects, setNumberOfObjects] = useState<[number] | number>(2)
    return (
        <>
            <SelectionSlide number={numberOfSlides}/>
            <SelectionObject number={numberOfObjects}/>
        </>
    )
}