import { BlockType } from '../Block'

type TextBlockType = BlockType & {
  value: string
  fillColor?: string
  textColor?: string
  textFont?: string
  textSize?: number
  textBoldness?: boolean
  textUnderlines?: boolean
  textItalic?: boolean
  textHighlight?: string
}

export const TextBlock = ({
  value,
  fillColor = 'white',
  textColor = 'black',
  textFont = 'Arial',
  textSize = 12,
  textBoldness = false,
  textUnderlines = false,
  textItalic = false,
  textHighlight = '',
}: TextBlockType) => {
  return (
    <div style={{ backgroundColor: fillColor }}>
      <p
        style={{
          color: textColor,
          fontFamily: textFont,
          fontSize: textSize,
          fontWeight: textBoldness ? 500 : 400,
          textDecoration: textUnderlines ? 'underline' : 'none',
          fontStyle: textItalic ? 'italic' : 'normal',
        }}
      >
        {value}
      </p>
    </div>
  )
}

export type { TextBlockType }
