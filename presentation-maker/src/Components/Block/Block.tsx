import {GraphicObjectType} from "./GraphicObject/GraphicObject";
import {ImageBlockType} from "./ImageBlock/ImageBlock";
import {TextBlockType} from "./TextBlock/TextBlock";

type BlockType = {
    id: number,
    blockContent: TextBlockType | ImageBlockType  | GraphicObjectType;
    borderSize: number;
    borderColor: string;
    coordinatesX: number;
    coordinatesY: number;
    sizeX: number;
    sizeY: number;
}

export const Block = () => {
    return (
        <h1></h1>
    )
}

export type {BlockType}