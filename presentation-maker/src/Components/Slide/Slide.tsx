import {BlockType} from "../Block/Block";
import {PictureBase64Type} from "../Picture/PictureBase64";
import {PictureUrlType} from "../Picture/PictureUrl";
import {TextBlock} from "../Block/TextBlock/TextBlock";

type SlideType = {
    id: number,
    background: PictureBase64Type | PictureUrlType | string,
    objects: BlockType[],
}

export const Slide = () => {
    return (
        <TextBlock textBoldness={false} textFont={"default"} textColor={"yellow"} fillColor={"red"} textHighlight={"white"}
                   textItalic={false} textSize={12} textUnderlines={false} value={"123"}/>
    )
}

export type {
    SlideType
}

