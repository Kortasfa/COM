type Slide = {
    id: number,
    background:  PictureBase64 | PictureUrl | BackgroundColor,
    objects: Block[],
}

const Slide