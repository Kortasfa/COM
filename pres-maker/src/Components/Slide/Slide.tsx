import { BlockType } from '../Block/Block';
import { PictureBase64Type } from '../Picture/PictureBase64';
import { PictureUrlType } from '../Picture/PictureUrl';
import { TextBlock, TextBlockType } from '../Block/TextBlock/TextBlock';
import { ImageBlock, ImageBlockType } from '../Block/ImageBlock/ImageBlock';
import {
	GraphicObject,
	GraphicObjectType,
} from '../Block/GraphicObject/GraphicObject';
import React, { ReactNode } from 'react';

type SlideType = {
	id: number
	background?: string
	objects?: JSX.Element[]
}

export const Slide = ({ id, background, objects }: SlideType) => {
	return (
		<div style={{ background }}>
			{objects &&
				objects.map((Component, index) => (
					<React.Fragment key={index}>{Component}</React.Fragment>
				))}
		</div>
	)
}

export type { SlideType }
