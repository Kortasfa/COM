import {Slide, SlideType} from "../Slide/Slide";

type Doc = {
    name: string,
    slides: [SlideType]
}

export default function Doc() {
    return (
        <Slide/>
    )
}