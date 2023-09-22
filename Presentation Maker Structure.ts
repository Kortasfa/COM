type Char = {
    type: "text";
    value: string;
};

type PictureBase64 = {
    PictureBase64: string;
};

type PictureUrl = {
    PictureUrl: string;
}

type square = {
    typeOfFigure: string;
}

type triangle = {
    typeOfFigure: string;
}
type circle = {
    typeOfFigure: string;
}

type Figure = {
    ID: number;
    figure: square | triangle | circle
    endX: number;
    endY: number;
}

type GraphicObject = Block & {
    ID: number;
    fillColor: string;
    figures: Array<Figure>;
    data: Object;
};

type ImageBlock = Block & {
    type: "image";
    ID: number;
    src: PictureBase64| PictureUrl;
    opacity: number;
};

type TextBlock = Block & {
    ID: number;
    fillColor: string;
    textColor: string;
    textFont: string;
    textSize: number;
    textBoldness: boolean;
    textUnderlines: boolean;
    textItalic: boolean;
    textHighlight: string;
    chars: Char[];
};

type Block = {
    blockType: TextBlock | ImageBlock | GraphicObject;
    borderSize: number;
    borderColor: string;
    coordinatesX: number;
    coordinatesY: number;
    sizeX: number;
    sizeY: number;
};

type BackgroundColor = {
    BackgroundColor: string;
}

type Slide = {
    ID: number;
    position: number;
    background: PictureBase64| PictureUrl | BackgroundColor;
    objects: Array<Block>;
};

type Doc = {
    slides: Slide[];
    name: string;
};

type Action = {
    ID: number;
    selectId: Array<Selection>; 
    actionType: {
        move: string;
        resize: string;
        delete: string;
        add: string;
    }
    startPoint: string; // undo
    endPoint: string; // redo
}

type SelectionSlide = {
    selectSlide: number;
    selectObject: Array<Number>;
};

type Editor = {
    history: Array<Action>
    selection: Array<SelectionSlide>;
    doc: Doc;
};

export { Editor };
