import { BlockType } from '../Block';

type GraphicObjectType = BlockType & {
	fillColor?: string
	graphicObjectType: 'rectangle' | 'triangle' | 'circle'
}

const GraphicObject = ({
	id,
	borderSize = 1,
	sizeX = 5,
	sizeY = 5,
	borderColor = 'black',
	coordinatesY,
	coordinatesX,
	fillColor = 'black',
	graphicObjectType,
}: GraphicObjectType) => {
	const rectangle = (
		<svg viewBox='0 0 220 100' xmlns='http://www.w3.org/2000/svg'>
			<rect width='100' height='100' fill={fillColor} />
		</svg>
	);

	const circle = (
		<svg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'>
			<circle cx='100' cy='75' r='50' fill={fillColor} />
		</svg>
	);

	const triangle = (
		<div className='triangle-container'>
			<svg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'>
				<polygon
					points='150,60 0,400 300,400'
					className='triangle'
					fill={fillColor}
				/>
			</svg>
		</div>
	);

	let render;
	if (graphicObjectType === 'rectangle') {
		render = rectangle;
	} else if (graphicObjectType === 'circle') {
		render = circle;
	} else if (graphicObjectType === 'triangle') {
		render = triangle;
	} else {
		return null;
	}

	return render;
};

export { GraphicObject };

export type { GraphicObjectType };
