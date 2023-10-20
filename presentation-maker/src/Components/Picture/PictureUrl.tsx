type PictureUrlType = {
    imgSrc: string;
}

export const PictureUrl = ({imgSrc}: PictureUrlType) => {
    return (
        <img src={imgSrc}/>
    )
}

export type {PictureUrlType}