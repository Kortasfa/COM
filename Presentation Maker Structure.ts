type Char = {
    type: "text";
    value: string; 
    fontFamily: string;
    fontSize: number; 
    color: string; 
    bold: boolean;
};

type TextBlock = Block & {
    type: "text";
    ID: number;
    color: string;
    chars: Char[];
};

type PictureBase64 = {
    PictureBase64: string;
};

type PictureUrl = {
    PictureUrl: string;
}

type ImageBlock = Block & {
    type: "image";
    ID: number;
    src: PictureBase64| PictureUrl;
    opacity: number;

};

// type squareFigure = {
//     typeOfFigure: string;
// } 

// type triangleFigure = {
//     typeOfFigure: string;
// } 
// type circleFigure = {
//     typeOfFigure: string;    
// } 

type Figure = {
    // square: squareFigure;
    // triangle: triangleFigure;
    // circle: circleFigure; 
}

type GraphicObject = Block & {
    ID: number;
    color: string;
    figures: Array<Figure>;
    data: Object;
};

type Block = {
    blockType: TextBlock | ImageBlock | GraphicObject;
    colorBorder: string;
    coordinatesX: number;
    coordinatesY: number;
    size: number;
};

type BackgroundBase64 = {
    backgroundBase64: string;
}

type BackgroundUrl = {
    BackgroundUrl: string;
}

type BackgroundColor = {
    BackgroundColor: string;
}

type Slide = {
    ID: number;
    background: BackgroundBase64| BackgroundUrl | BackgroundColor;  
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
