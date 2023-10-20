import {PictureBase64Type} from "../../Picture/PictureBase64";
import {PictureUrlType} from "../../Picture/PictureUrl";

type ImageBlockType = {
    type: "image";
    src: PictureBase64Type | PictureUrlType;
    opacity: number;
}

export const ImageBlock = () => {
    return (
        <h1></h1>
    )
}

export type {ImageBlockType}