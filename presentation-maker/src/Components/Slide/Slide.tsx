import {Block, BlockType} from "../Block/Block";
import {PictureBase64Type} from "../Picture/PictureBase64";
import {PictureUrlType} from "../Picture/PictureUrl";

type SlideType = {
    id: number,
    background:  PictureBase64Type | PictureUrlType | string,
    objects: BlockType[],
}

export const Slide = () => {
    return (
        <Block/>
    )
}

export type {
    SlideType
}

