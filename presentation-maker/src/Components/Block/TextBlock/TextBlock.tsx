type TextBlockType = {
    type: "text";
    value: string;
    fillColor: string;
    textColor: string;
    textFont: string;
    textSize: number;
    textBoldness: boolean;
    textUnderlines: boolean;
    textItalic: boolean;
    textHighlight: string;
}

export const TextBlock = ({
                              value,
                              fillColor,
                              textColor,
                              textFont,
                              textSize,
                              textBoldness,
                              textUnderlines,
                              textItalic,
                              textHighlight
                          }: TextBlockType) => {
    return (
        <div color={fillColor}>
            <p color={textColor} style={{
                font: textFont,
                fontSize: textSize,
                fontWeight: textBoldness ? 500 : 400,
                textDecoration: textUnderlines ? "underline" : "none",
                fontStyle: textItalic ? "italic" : "normal",
            }}>{value}</p>
        </div>
    )
}

export type {TextBlockType}