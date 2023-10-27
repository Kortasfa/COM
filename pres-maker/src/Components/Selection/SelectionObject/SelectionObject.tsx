import { useState } from 'react';

type SelectionObjectProps = {
	number: number | [number]
}

const SelectionObject = ({ number }: SelectionObjectProps) => {
	const [numberOfObjects, setNumberOfObjects] = useState(number);

	return <p>123</p>;
}

export default SelectionObject;
